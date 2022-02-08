// SPDX-License-Identifier: MIT
pragma solidity ^0.5.0;

pragma experimental ABIEncoderV2;
contract SmartContract {
    // State variable = represent the state of the smart contract in the blockchain
    uint public contractCount = 0;

    struct Contract{
        uint id;
        string seller;
        string buyer;
        string type_immoblier;
        string price;
        uint date;
       
    }

    mapping(uint => Contract) public contracts;

    event ContractCreated(
        uint id,
        string seller,
        string buyer,
        string type_immoblier,
         string price,
         uint date
       
    );
   
    constructor() public {
        createContract("My first smart contract", "nom","pppp", "ppppp");
    }

    function createContract(string memory _seller,string memory _buyer, string memory _type_immoblier, string memory  _price) public{
        contractCount ++;
        contracts[contractCount] = Contract(contractCount, _seller, _buyer, _type_immoblier, _price, now);
        emit ContractCreated(contractCount, _seller, _buyer, _type_immoblier, _price, now);
    }

    function getAll() public view returns (Contract[] memory){
    Contract[] memory all = new Contract[](contractCount);
    for (uint j = 0; j < contractCount; j++) {
       
           all[j] = contracts[j];
        
    }
    return all;
}

}
