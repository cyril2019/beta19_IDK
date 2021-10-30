//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {
    string private admin_adhar="0000 0000 0000";
    string private admin_dob="02/11/1999";
    mapping(string=>bool) hasVoted;

    function vote_status(string memory _adhar)public view returns(bool){
        return hasVoted[_adhar];
    }

    function vote(string memory _adhar) public{
            console.log("Adhar no %s voted",_adhar);
            hasVoted[_adhar]=true;
    }
}
