pragma solidity ^0.8.4;
// SPDX-License-Identifier: UNLICENSED

import "@openzeppelin/contracts/utils/introspection/ERC165Storage.sol";

abstract contract HasSecondarySale is ERC165Storage {

    /*
     * bytes4(keccak256('checkSecondarySale(uint256)')) == 0x0e883747
     * bytes4(keccak256('setSecondarySale(uint256)')) == 0x5b1d0f4d
     *
     * => 0x0e883747 ^ 0x5b1d0f4d == 0x5595380a
     */
    bytes4 private constant _INTERFACE_ID_HAS_SECONDARY_SALE = 0x5595380a;

    constructor() {
        _registerInterface(_INTERFACE_ID_HAS_SECONDARY_SALE);
    }

    function checkSecondarySale(uint256 id) public virtual view returns (bool);
    function setSecondarySale(uint256 id) public virtual;
}