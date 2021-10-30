//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {
    string private admin_adhar="0000 0000 0000";
    string private admin_dob="02/11/1999";
    mapping(string=>uint) result;

    function countVote(string memory _candidate)public view returns(uint){
        return result[_candidate];
    }

    function addVote(string memory _candidate) public{
            result[_candidate]+=1;
    }
}
