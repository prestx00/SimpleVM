"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ExecuteButton = exports.ResultText = exports.ResultAndExecuteContainer = void 0;
var styled_components_1 = require("styled-components");
var OpCodeStyledComponents_1 = require("./OpCodeStyledComponents");
exports.ResultAndExecuteContainer = styled_components_1["default"](OpCodeStyledComponents_1.Container)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  justify-content: space-between;\n"], ["\n  justify-content: space-between;\n"])));
exports.ResultText = styled_components_1["default"].span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 20px;\n  font-family: \"Inter\", sans-serif;\n  font-weigth: 500;\n"], ["\n  font-size: 20px;\n  font-family: \"Inter\", sans-serif;\n  font-weigth: 500;\n"])));
exports.ExecuteButton = styled_components_1["default"].button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  padding: 10px;\n  background-color: #252525;\n  color: white;\n  align-items: center;\n  border-radius: 15px;\n  border: 1px solid #1850ac;\n  width: 150px;\n  font-size: 20px;\n  cursor: pointer;\n  transition: border-color 0.3s, color 0.3s;\n\n  &:hover {\n    border-color: #f16b16;\n    color: #f16b16;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  padding: 10px;\n  background-color: #252525;\n  color: white;\n  align-items: center;\n  border-radius: 15px;\n  border: 1px solid #1850ac;\n  width: 150px;\n  font-size: 20px;\n  cursor: pointer;\n  transition: border-color 0.3s, color 0.3s;\n\n  &:hover {\n    border-color: #f16b16;\n    color: #f16b16;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3;
