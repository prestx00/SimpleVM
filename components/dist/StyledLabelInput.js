"use strict";
exports.__esModule = true;
exports.tooltipTextOpCode = exports.tooltipTextStack = void 0;
var Tooltip_1 = require("./Tooltip");
var StyledLabelInputComponents_1 = require("./styledcomponents/StyledLabelInputComponents");
exports.tooltipTextStack = "A 'stack' in the context of data structures is like a pile of books. You can only add a new book on the top of the pile and remove the top book. This principle is called 'Last In, First Out' (LIFO), meaning the last item you put in is the first one you take out.";
exports.tooltipTextOpCode = "An opcode is like a secret code that computers use to understand and follow instructions. It's a short command that tells the computer what action to perform, like adding numbers, subtracting, or moving information from one place to another. Just like we follow recipes to cook, computers use opcodes to execute tasks.";
var StyledLabelInput = function (_a) {
    var type = _a.type, id = _a.id, name = _a.name, label = _a.label, placeholder = _a.placeholder, tooltipText = _a.tooltipText, inputRef = _a.inputRef;
    return (React.createElement(StyledLabelInputComponents_1.Container, null,
        React.createElement(StyledLabelInputComponents_1.LabelContainer, null,
            React.createElement(StyledLabelInputComponents_1.Label, { htmlFor: id }, label),
            React.createElement(Tooltip_1["default"], { tooltipText: tooltipText === "stack" ? exports.tooltipTextStack : exports.tooltipTextOpCode },
                React.createElement("img", { src: "/info.svg", alt: "info" }))),
        React.createElement(StyledLabelInputComponents_1.Input, { ref: inputRef, type: type, id: id, name: name, placeholder: placeholder })));
};
exports["default"] = StyledLabelInput;
