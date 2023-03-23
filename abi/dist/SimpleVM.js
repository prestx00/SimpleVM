"use strict";
exports.__esModule = true;
exports.abi = void 0;
var ethers_1 = require("ethers");
var defaultProvider_1 = require("./defaultProvider");
exports.abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "int256[]",
                name: "resultStack",
                type: "int256[]"
            },
        ],
        name: "Result",
        type: "event"
    },
    {
        inputs: [
            { internalType: "int256[]", name: "initialStack", type: "int256[]" },
            { internalType: "uint8[]", name: "bytecode", type: "uint8[]" },
        ],
        name: "execute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "getLastResult",
        outputs: [{ internalType: "int256[]", name: "", type: "int256[]" }],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "lastResult",
        outputs: [{ internalType: "int256", name: "", type: "int256" }],
        stateMutability: "view",
        type: "function"
    },
];
var SimpleVM = new ethers_1.Contract("0xE7A9fA2403b50618AE777f9E066bf90aF9d92210", exports.abi, defaultProvider_1["default"]);
exports["default"] = SimpleVM;
