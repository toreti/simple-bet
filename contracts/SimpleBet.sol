// SPDX-License-Identifier: No License
pragma solidity 0.6.4;

import './IBEP20.sol';

contract SimpleBet {
    address public owner = msg.sender;

    /**
     * @notice Generate a unique identifier for a match
     * @param option1 identifier for a option
     * @param option2 identifier for other option
     * @param date of the match, used only to create the hash
     * @param token allowed to bets
     * @return a hash used to identify the match
     */
    function generateHash(
        string memory option1,
        string memory option2,
        string memory date,
        IBEP20 token
    ) public pure returns (bytes32) {
        return keccak256(abi.encode(option1, option2, date, token));
    }
}
