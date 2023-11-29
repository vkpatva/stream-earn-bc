// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import {FunctionsClient} from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/FunctionsClient.sol";
import {ConfirmedOwner} from "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";
import {FunctionsRequest} from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/libraries/FunctionsRequest.sol";
import {StreamToken} from "./StreamToken.sol";

contract StreamEarn is FunctionsClient, ConfirmedOwner {
    using FunctionsRequest for FunctionsRequest.Request;

    mapping(string => address) public songToArtist;
    mapping(address => bool) public whitelistedAddresses;
    mapping(bytes32 => uint) public responses;
    mapping(bytes32 => string) public requestIdToSongId;
    mapping(string => uint256) public songIdTotalPaid;
    mapping(string => uint256) public totalPlays;

    error UnexpectedRequestID(bytes32 requestId);
    error NotWhitelisted(address sender);

    event DataResponse(
        bytes32 indexed requestId,
        bytes indexed response,
        bytes err
    );
    event mintStreamTokens(
        address indexed artist,
        uint256 number,
        string songId
    );
    event RequestSent(bytes32 indexed requestId, string songId);

    StreamToken public streamToken;

    constructor(
        address router,
        address _streamToken
    ) FunctionsClient(router) ConfirmedOwner(msg.sender) {
        streamToken = StreamToken(_streamToken);
    }

    modifier onlyWhitelisted() {
        require(whitelistedAddresses[msg.sender], "Not whitelisted");
        _;
    }

    function addWhitelistedAddress(address _address) external onlyOwner {
        whitelistedAddresses[_address] = true;
    }

    function removeWhitelistedAddress(address _address) external onlyOwner {
        whitelistedAddresses[_address] = false;
    }

    function addSong(
        string memory songId,
        address artistAddress
    ) external onlyOwner {
        require(whitelistedAddresses[artistAddress], "Singer not whitelisted");
        songToArtist[songId] = artistAddress;
    }

    function getPaid(string memory songId) external {
        require(songToArtist[songId] == msg.sender, "Artist not owner of song");
        uint256 lastPaid = songIdTotalPaid[songId];
        uint256 newPayment = totalPlays[songId] - lastPaid;
        streamToken.mint(msg.sender, newPayment);
        songIdTotalPaid[songId] = totalPlays[songId];
        emit mintStreamTokens(msg.sender, newPayment, songId);
    }

    function sendRequest(
        string memory source,
        bytes memory encryptedSecretsUrls,
        uint8 donHostedSecretsSlotID,
        uint64 donHostedSecretsVersion,
        string[] memory args,
        bytes[] memory bytesArgs,
        uint64 subscriptionId,
        uint32 gasLimit,
        bytes32 donID
    ) external onlyWhitelisted returns (bytes32 requestId) {
        FunctionsRequest.Request memory req;
        req.initializeRequestForInlineJavaScript(source);
        if (encryptedSecretsUrls.length > 0)
            req.addSecretsReference(encryptedSecretsUrls);
        else if (donHostedSecretsVersion > 0) {
            req.addDONHostedSecrets(
                donHostedSecretsSlotID,
                donHostedSecretsVersion
            );
        }
        if (args.length > 0) req.setArgs(args);
        if (bytesArgs.length > 0) req.setBytesArgs(bytesArgs);
        bytes32 s_lastRequestId = _sendRequest(
            req.encodeCBOR(),
            subscriptionId,
            gasLimit,
            donID
        );
        requestIdToSongId[s_lastRequestId] = args[0];
        emit RequestSent(s_lastRequestId, args[0]);
        return s_lastRequestId;
    }

    function sendRequestCBOR(
        bytes memory request,
        uint64 subscriptionId,
        uint32 gasLimit,
        bytes32 donID
    ) external onlyWhitelisted returns (bytes32 requestId) {
        bytes32 s_lastRequestId = _sendRequest(
            request,
            subscriptionId,
            gasLimit,
            donID
        );
        return s_lastRequestId;
    }

    function fulfillRequest(
        bytes32 requestId,
        bytes memory response,
        bytes memory err
    ) internal override {
        emit DataResponse(requestId, response, err);
        uint256 totalPlay = uint256(bytes32(response));
        string memory songId = requestIdToSongId[requestId];
        totalPlays[songId] += totalPlay;
    }

    function changeStreamToken(address newStreamToken) external onlyOwner {
        require(newStreamToken != address(0), "Invalid address");
        streamToken = StreamToken(newStreamToken);
    }
}
