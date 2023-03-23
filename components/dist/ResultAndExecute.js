"use strict";
exports.__esModule = true;
var ResultAndExecuteStyledComponents_1 = require("./styledcomponents/ResultAndExecuteStyledComponents");
var ResultAndExecute = function (_a) {
    var result = _a.result, loader = _a.loader, Spinner = _a.spinner;
    return (React.createElement(React.Fragment, null,
        React.createElement(ResultAndExecuteStyledComponents_1.ResultAndExecuteContainer, null,
            React.createElement("div", null,
                React.createElement(ResultAndExecuteStyledComponents_1.ResultText, null, "Result:" + result)),
            React.createElement("div", null,
                React.createElement(ResultAndExecuteStyledComponents_1.ExecuteButton, { disabled: loader }, loader ? React.createElement(Spinner, { color: "#ffffff" }) : "Execute")))));
};
exports["default"] = ResultAndExecute;
