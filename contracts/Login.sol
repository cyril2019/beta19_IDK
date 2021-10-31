//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Login {
    string private admin_adhar;
    string private admin_dob;
    mapping(string=>bool) hasVoted;
    mapping(string=>uint) result;

    constructor(){
       admin_adhar= "0000 0000 0000";
       admin_dob="02/11/1999";
    }
    function vote_status(string memory _adhar)public view returns(bool){
        return hasVoted[_adhar];
    }

    function getAdmin() public view returns(string memory){
        return admin_adhar;
    }

    function vote(string memory _voter,string memory _candidate) public{
            hasVoted[_voter]=true;
            result[_candidate]+=1;
    }

     function getResult(string memory _candidate) public view returns(uint){
        return result[_candidate];
    }
}
