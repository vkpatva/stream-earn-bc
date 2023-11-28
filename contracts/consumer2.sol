// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import {FunctionsClient} from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/FunctionsClient.sol";
import {ConfirmedOwner} from "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";
import {FunctionsRequest} from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/libraries/FunctionsRequest.sol";
import {StreamToken} from "./StreamToken.sol";

contract FunctionsConsumer is FunctionsClient, ConfirmedOwner {
    using FunctionsRequest for FunctionsRequest.Request;

    bytes32 public s_lastRequestId;

    mapping(address => bool) public whitelistedAddresses;
    mapping(bytes32 => address) public requestIdToSender;
    mapping(bytes32 => string) public requestIdToSongId;
    mapping(bytes32 => uint) public responses;
    mapping(string => uint256) public totalPlays;

    error UnexpectedRequestID(bytes32 requestId);
    error NotWhitelisted(address sender);

    event Response(bytes32 indexed requestId, bytes response, bytes err);
    event mintTokens(bytes32 indexed requestId, uint256 number);
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

    function isWhitelistedAddress(
        address _address
    ) external view returns (bool) {
        return whitelistedAddresses[_address];
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
        bytes32 donID,
        string memory songId
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
        s_lastRequestId = _sendRequest(
            req.encodeCBOR(),
            subscriptionId,
            gasLimit,
            donID
        );
        requestIdToSender[s_lastRequestId] = msg.sender;
        requestIdToSongId[s_lastRequestId] = songId;
        return s_lastRequestId;
    }

    function sendRequestCBOR(
        bytes memory request,
        uint64 subscriptionId,
        uint32 gasLimit,
        bytes32 donID,
        string memory songId
    ) external onlyWhitelisted returns (bytes32 requestId) {
        s_lastRequestId = _sendRequest(
            request,
            subscriptionId,
            gasLimit,
            donID
        );
        requestIdToSender[s_lastRequestId] = msg.sender;
        requestIdToSongId[s_lastRequestId] = songId;
        return s_lastRequestId;
    }

    function fulfillRequest(
        bytes32 requestId,
        bytes memory response,
        bytes memory err
    ) internal override {
        emit Response(requestId, response, err);
        address requester = requestIdToSender[requestId];
        string memory songId = requestIdToSongId[requestId];
        uint256 totalSongsPlayed = uint256(bytes32(response));
        responses[requestId] = totalSongsPlayed;
        uint256 lastChecked = totalPlays[songId];
        uint256 newPlays = totalSongsPlayed - lastChecked;
        streamToken.mint(requester, newPlays);
        totalPlays[songId] = totalSongsPlayed;
    }

    function changeStreamToken(address newStreamToken) external onlyOwner {
        require(newStreamToken != address(0), "Invalid address");
        streamToken = StreamToken(newStreamToken);
    }
}
