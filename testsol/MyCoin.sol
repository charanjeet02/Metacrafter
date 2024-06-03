//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

contract MyCoin {
    string public nameCoin;
    string public representation;
    uint public aggregate_supply;

    mapping(address => uint) public remaining_amount;

    constructor(string memory _name, string memory _rep, uint _aggregateSupply) {
        nameCoin = _name;
        representation = _rep;
        aggregate_supply = _aggregateSupply;
        remaining_amount[msg.sender] = _aggregateSupply;
    }

    function mint(address _to, uint _value) public {
        aggregate_supply += _value;
        remaining_amount[_to] += _value;
    }

    function burn(address _from, uint _value) public {
        if(remaining_amount[_from] >= _value){
        aggregate_supply -= _value;
        remaining_amount[_from] -= _value;}
            }
    }
