// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract Buyable is Ownable, Pausable {
    event Sent(address indexed payee, uint256 amount, uint256 balance);
    event Received(
        address indexed payer,
        uint256 tokenId,
        uint256 amount,
        uint256 balance
    );

    ERC721 public nftAddress;
    uint256 public currentPrice;

    constructor(address _nftAddress, uint256 _currentPrice) {
        require(_nftAddress != address(0) && _nftAddress != address(this));
        require(_currentPrice > 0);
        nftAddress = ERC721(_nftAddress);
        currentPrice = _currentPrice;
    }
}
