//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Login {
    string private admin_adhar;
    string private admin_dob;
    mapping(string=>bool) hasVoted;

    constructor(){
       admin_adhar= "0000 0000 0000";
       admin_dob="02/11/1999";
    }
    function vote_status(string memory _adhar)public view returns(bool){
        return hasVoted[_adhar];
    }

    function vote(string memory _adhar) public{
            console.log("Adhar no %s voted",_adhar);
            hasVoted[_adhar]=true;
    }
}
