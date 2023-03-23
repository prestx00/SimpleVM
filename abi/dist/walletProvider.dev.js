"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ethers = require("ethers");

var walletProvider;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  walletProvider = new _ethers.BrowserProvider(window.ethereum);
}

var _default = walletProvider;
exports["default"] = _default;