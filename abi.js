export const contractAddress="0x1e08017D32bade670417bE1A5f3D9E045a56256e";//address to

export const contractABI=[
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "contracts",
    "outputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "seller",
        "type": "string"
      },
      {
        "name": "buyer",
        "type": "string"
      },
      {
        "name": "type_immoblier",
        "type": "string"
      },
      {
        "name": "price",
        "type": "string"
      },
      {
        "name": "date",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "contractCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "seller",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "buyer",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "type_immoblier",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "price",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "date",
        "type": "uint256"
      }
    ],
    "name": "ContractCreated",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_seller",
        "type": "string"
      },
      {
        "name": "_buyer",
        "type": "string"
      },
      {
        "name": "_type_immoblier",
        "type": "string"
      },
      {
        "name": "_price",
        "type": "string"
      }
    ],
    "name": "createContract",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getAll",
    "outputs": [
      {
        "components": [
          {
            "name": "id",
            "type": "uint256"
          },
          {
            "name": "seller",
            "type": "string"
          },
          {
            "name": "buyer",
            "type": "string"
          },
          {
            "name": "type_immoblier",
            "type": "string"
          },
          {
            "name": "price",
            "type": "string"
          },
          {
            "name": "date",
            "type": "uint256"
          }
        ],
        "name": "",
        "type": "tuple[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]