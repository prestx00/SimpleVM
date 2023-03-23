"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.StyledLogo = exports.StyledHeaderInner = exports.StyledHeader = void 0;
var styled_components_1 = require("styled-components");
exports.StyledHeader = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  max-width: 100%;\n  min-width: 100%;\n  position: relative;\n  width: 100%;\n  z-index: 0;\n  align-items: center;\n  justify-content: center;\n  background-color: #131315;\n  height: 6.5rem;\n"], ["\n  display: flex;\n  max-width: 100%;\n  min-width: 100%;\n  position: relative;\n  width: 100%;\n  z-index: 0;\n  align-items: center;\n  justify-content: center;\n  background-color: #131315;\n  height: 6.5rem;\n"])));
exports.StyledHeaderInner = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 87.5rem;\n  width: 100%;\n  padding: 0 3.75rem;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 87.5rem;\n  width: 100%;\n  padding: 0 3.75rem;\n"])));
exports.StyledLogo = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  max-width: 156px;\n  max-height: 56px;\n"], ["\n  max-width: 156px;\n  max-height: 56px;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
