"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ethers = require("ethers");

var _defaultProvider = _interopRequireDefault(require("./defaultProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ABI = [{
  anonymous: false,
  inputs: [{
    indexed: false,
    internalType: "int256[]",
    name: "resultStack",
    type: "int256[]"
  }],
  name: "Result",
  type: "event"
}, {
  inputs: [{
    internalType: "int256[]",
    name: "initialStack",
    type: "int256[]"
  }, {
    internalType: "uint8[]",
    name: "bytecode",
    type: "uint8[]"
  }],
  name: "execute",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "getLastResult",
  outputs: [{
    internalType: "int256[]",
    name: "",
    type: "int256[]"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  name: "lastResult",
  outputs: [{
    internalType: "int256",
    name: "",
    type: "int256"
  }],
  stateMutability: "view",
  type: "function"
}];
var SimpleVM = new _ethers.Contract("0x31c415D6530eEb98b43f413F639309365195B830", ABI, _defaultProvider["default"]);
var _default = SimpleVM;
exports["default"] = _default;