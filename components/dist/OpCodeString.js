"use strict";
exports.__esModule = true;
var OpCodeStyledComponents_1 = require("./styledcomponents/OpCodeStyledComponents");
var OpcodeStrings = function () {
    var opcodes = [
        "0 = IADD(+)",
        "1 = ISUB(-)",
        "2 = IMUL(*)",
        "3 = IDIV(/)",
        "4 = IINC(+1)",
        "5 = IDEC(-1)",
        "6 = FDEL",
        "7 = SWAP",
    ];
    var halfLength = opcodes.length / 2;
    var firstHalf = opcodes.slice(0, halfLength);
    var secondHalf = opcodes.slice(halfLength);
    return (React.createElement(OpCodeStyledComponents_1.Container, null,
        React.createElement(OpCodeStyledComponents_1.OpcodeStringContainer, null, firstHalf.map(function (opcode, index) { return (React.createElement("ul", { key: index },
            React.createElement(OpCodeStyledComponents_1.OpcodeElement, null, opcode))); })),
        React.createElement(OpCodeStyledComponents_1.OpcodeStringContainer, null, secondHalf.map(function (opcode, index) { return (React.createElement("ul", { key: index },
            React.createElement(OpCodeStyledComponents_1.OpcodeElement, null, opcode))); }))));
};
exports["default"] = OpcodeStrings;
