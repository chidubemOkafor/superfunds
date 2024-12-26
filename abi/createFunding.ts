export const abi =  [
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
      }
    ],
    "name": "CreateFundingEvent",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "FundingArray",
    "outputs": [
      {
        "internalType": "contract Funding",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
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
  },
  {
    "inputs": [],
    "name": "getAllFundingCampaign",
    "outputs": [
      {
        "internalType": "contract Funding[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
