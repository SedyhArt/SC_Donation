// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Donation {

    address[] private donaters;
    address private manager;
    mapping(address => uint) private donationAmount;

    modifier restricted() {
        require(msg.sender == manager, "Access denied");
        _;
    }

    constructor () {
        manager = msg.sender;
    }

    function donate() public payable {
        if (donationAmount[msg.sender] > 0) {
            donaters.push(msg.sender);
        }
        donationAmount[msg.sender] = donationAmount[msg.sender] + msg.value;
    }

    function getAllDonaters() public view returns(address[] memory) {
        return donaters;
    }

    function getDonationAmountUser(address _userAddress) public view returns(uint) {
        return donationAmount[_userAddress];
    }

    function withdraw(address payable _targetAddress, uint _amountOfEth) public restricted {
       _targetAddress.transfer(_amountOfEth);
    }

}