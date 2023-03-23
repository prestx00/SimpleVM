"use strict";
exports.__esModule = true;
var ethers_1 = require("ethers");
var walletProvider;
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    walletProvider = new ethers_1.BrowserProvider(window.ethereum);
}
exports["default"] = walletProvider;
