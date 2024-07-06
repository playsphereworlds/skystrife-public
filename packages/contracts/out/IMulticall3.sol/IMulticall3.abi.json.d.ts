declare const abi: [
  {
    "type": "function",
    "name": "aggregate",
    "inputs": [
      {
        "name": "calls",
        "type": "tuple[]",
        "internalType": "struct IMulticall3.Call[]",
        "components": [
          {
            "name": "target",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "callData",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "blockNumber",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "returnData",
        "type": "bytes[]",
        "internalType": "bytes[]"
      }
    ],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "aggregate3",
    "inputs": [
      {
        "name": "calls",
        "type": "tuple[]",
        "internalType": "struct IMulticall3.Call3[]",
        "components": [
          {
            "name": "target",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "allowFailure",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "callData",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "returnData",
        "type": "tuple[]",
        "internalType": "struct IMulticall3.Result[]",
        "components": [
          {
            "name": "success",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "returnData",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      }
    ],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "aggregate3Value",
    "inputs": [
      {
        "name": "calls",
        "type": "tuple[]",
        "internalType": "struct IMulticall3.Call3Value[]",
        "components": [
          {
            "name": "target",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "allowFailure",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "value",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "callData",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "returnData",
        "type": "tuple[]",
        "internalType": "struct IMulticall3.Result[]",
        "components": [
          {
            "name": "success",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "returnData",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      }
    ],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "blockAndAggregate",
    "inputs": [
      {
        "name": "calls",
        "type": "tuple[]",
        "internalType": "struct IMulticall3.Call[]",
        "components": [
          {
            "name": "target",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "callData",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "blockNumber",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "blockHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "returnData",
        "type": "tuple[]",
        "internalType": "struct IMulticall3.Result[]",
        "components": [
          {
            "name": "success",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "returnData",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      }
    ],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "getBasefee",
    "inputs": [],
    "outputs": [
      {
        "name": "basefee",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getBlockHash",
    "inputs": [
      {
        "name": "blockNumber",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "blockHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getBlockNumber",
    "inputs": [],
    "outputs": [
      {
        "name": "blockNumber",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getChainId",
    "inputs": [],
    "outputs": [
      {
        "name": "chainid",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getCurrentBlockCoinbase",
    "inputs": [],
    "outputs": [
      {
        "name": "coinbase",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getCurrentBlockDifficulty",
    "inputs": [],
    "outputs": [
      {
        "name": "difficulty",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getCurrentBlockGasLimit",
    "inputs": [],
    "outputs": [
      {
        "name": "gaslimit",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getCurrentBlockTimestamp",
    "inputs": [],
    "outputs": [
      {
        "name": "timestamp",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getEthBalance",
    "inputs": [
      {
        "name": "addr",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "balance",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getLastBlockHash",
    "inputs": [],
    "outputs": [
      {
        "name": "blockHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "tryAggregate",
    "inputs": [
      {
        "name": "requireSuccess",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "calls",
        "type": "tuple[]",
        "internalType": "struct IMulticall3.Call[]",
        "components": [
          {
            "name": "target",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "callData",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "returnData",
        "type": "tuple[]",
        "internalType": "struct IMulticall3.Result[]",
        "components": [
          {
            "name": "success",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "returnData",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      }
    ],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "tryBlockAndAggregate",
    "inputs": [
      {
        "name": "requireSuccess",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "calls",
        "type": "tuple[]",
        "internalType": "struct IMulticall3.Call[]",
        "components": [
          {
            "name": "target",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "callData",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "blockNumber",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "blockHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "returnData",
        "type": "tuple[]",
        "internalType": "struct IMulticall3.Result[]",
        "components": [
          {
            "name": "success",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "returnData",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      }
    ],
    "stateMutability": "payable"
  }
]; export default abi;
