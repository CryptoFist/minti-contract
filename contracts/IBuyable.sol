// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

/**
 * @dev Interface for a token which is buyable
 */
interface IBuyable {
    /**
     * @dev Emitted when 'tokenId' is transferred from 'from' to 'to' for a price.
     */
    event Sale(
        address indexed from,
        address indexed to,
        uint256 indexed tokenId,
        uint256 value
    );

    /**
     * @dev Emitted when 'tokenId' is listed for sale from 'from' to 'to' for a price.
     */
    event List(
        address indexed from,
        address indexed to,
        uint256 indexed tokenId,
        uint256 value
    );

    /**
     * @dev Returns the price of the tokenId
     */
    function priceOf(uint256 tokenId) external view returns (uint256 price);

    /**
     */
    function list(
        address from,
        uint256 tokenId,
        uint256 price
    ) external;

    /**
     */
    function getListed(uint256 tokenId) external;

    /**
     */
}
