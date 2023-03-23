"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ethers = require("ethers");

var defaultProvider = new _ethers.InfuraProvider("sepolia");
var _default = defaultProvider;
exports["default"] = _default;