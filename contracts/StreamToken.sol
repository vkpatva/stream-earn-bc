// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StreamToken is ERC20, Ownable {
    mapping(address => bool) private _minters;

    event MinterAdded(address indexed minter);
    event MinterRemoved(address indexed minter);

    constructor() ERC20("StreamToken", "STRM") Ownable(msg.sender) {
        _addMinter(msg.sender);
    }

    modifier onlyMinter() {
        require(_minters[msg.sender], "Not a minter");
        _;
    }

    function mint(address to, uint256 amount) external onlyMinter {
        _mint(to, amount);
    }

    function addMinter(address minter) external onlyOwner {
        _addMinter(minter);
    }

    function removeMinter(address minter) external onlyOwner {
        require(_minters[minter], "Address is not a minter");
        _minters[minter] = false;
        emit MinterRemoved(minter);
    }

    function _addMinter(address minter) internal {
        require(minter != address(0), "Minter cannot be the zero address");
        require(!_minters[minter], "Address is already a minter");
        _minters[minter] = true;
        emit MinterAdded(minter);
    }
}
