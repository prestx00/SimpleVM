"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.LabelContainer = exports.Input = exports.Label = exports.Container = void 0;
var styled_components_1 = require("styled-components");
exports.Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  justify-content: center;\n  margin-bottom: 20px;\n  width: 80%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  justify-content: center;\n  margin-bottom: 20px;\n  width: 80%;\n"])));
exports.Label = styled_components_1["default"].label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 54px;\n  margin-bottom: 5px;\n  margin-right: 5px;\n"], ["\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 54px;\n  margin-bottom: 5px;\n  margin-right: 5px;\n"])));
exports.Input = styled_components_1["default"].input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  padding: 8px;\n  font-size: 14px;\n  background: #252525;\n  border-radius: 20px;\n  border: 1px solid #1850ac;\n  outline: none;\n  color: white;\n\n  &:focus {\n    border-color: #f16b16;\n  }\n"], ["\n  width: 100%;\n  padding: 8px;\n  font-size: 14px;\n  background: #252525;\n  border-radius: 20px;\n  border: 1px solid #1850ac;\n  outline: none;\n  color: white;\n\n  &:focus {\n    border-color: #f16b16;\n  }\n"])));
exports.LabelContainer = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
