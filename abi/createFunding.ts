export const create_funding_abi =  [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "creator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "issueLink",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "maxAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "unlockTime",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "minAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "feePercentage",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newFundingAddress",
        "type": "address"
      }
    ],
    "name": "CreateFundingEvent",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_issueLink",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_maxAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_unlockTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_minAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_feePercentage",
        "type": "uint256"
      }
    ],
    "name": "createNewFunding",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
