"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.OpcodeElement = exports.OpcodeStringContainer = exports.Container = void 0;
var styled_components_1 = require("styled-components");
exports.Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin-bottom: 60px;\n  width: 80%;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin-bottom: 60px;\n  width: 80%;\n"])));
exports.OpcodeStringContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  flex-direction: column;\n"])));
exports.OpcodeElement = styled_components_1["default"].li(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-text: left;\n"], ["\n  display: flex;\n  align-text: left;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
