// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;
pragma experimental ABIEncoderV2;

import "../Auctionable.sol";

/**
 * @notice Mock Contract of ERC721Auction
 */
contract AuctionMock is Auctionable {
    uint256 public fakeBlockTimeStamp = 100;

    /**
     * @notice Auction Constructor
     * @param _token Token Interface
     * @param _serviceFeeProxy service fee proxy
     */
    constructor(
        IERC721 _token,
        ServiceFeeProxy _serviceFeeProxy
    ) Auctionable(_token, _serviceFeeProxy)
    {}

    function setBlockTimeStamp(uint256 _now) external {
        fakeBlockTimeStamp = _now;
    }

    function _getNow() internal override view returns (uint256) {
        return fakeBlockTimeStamp;
    }
}