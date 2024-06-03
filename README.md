# MyCoin Smart Contract




## Introduction
The provided Solidity code represents a foundational smart contract named "MyCoin," designed to imitate the behavior of an ERC20-like token on the Ethereum blockchain. This contract facilitates the creation, transfer, and burning of tokens within a decentralized ecosystem. Through its functions, users can mint new tokens, transfer them to other addresses, and burn existing tokens from their own balances. The contract leverages the Ethereum Virtual Machine (EVM) and adheres to the Solidity version ^0.8.18. 
# Getting Started
## Execution
To run this program, You can use tools like Remix IDE. 

You can execute this program using Remix, a web-based Solidity IDE. To begin, navigate to the Remix website by accessing https://remix.ethereum.org/.

Upon reaching the Remix website, initiate a new file by selecting the "+" icon located on the left-hand sidebar. Save the file with a .sol extension, for instance, "MyCoin.sol". Proceed by copying and pasting the provided code into the newly created file.

```bash
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
```

To compile the code, navigate to the "Solidity Compiler" tab located in the left-hand sidebar. Ensure that the "Compiler" option is set to "^0.8.18.", then click on the "Compile MyCoin.sol" button.

After compiling the code, proceed to deploy the contract by accessing the "Deploy & Run Transactions" tab in the left-hand sidebar. You need to input the desired values for the name of the coin, its representation, and the aggregate supply according to your preferences and then click on the transact.

After that, you will be able to input additional values "_to" and "_value" for the functions mint and burn to specify the address of the account and the amount to be burned or minted from the account.

You can utilize the remaining_amount mapping to retrieve the remaining balance of a specific account by providing the address of the account as input to the mapping.
## Authors
Charanjeet Singh

[@charanjeet02](https://www.github.com/charanjeet02)
