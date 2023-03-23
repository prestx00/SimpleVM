"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.TooltipText = exports.TooltipContainer = void 0;
var styled_components_1 = require("styled-components");
exports.TooltipContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  cursor: pointer;\n"], ["\n  position: relative;\n  cursor: pointer;\n"])));
exports.TooltipText = styled_components_1["default"].span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  visibility: hidden;\n  width: 400px;\n  background-color: #555;\n  color: #fff;\n  text-align: center;\n  padding: 5px;\n  border-radius: 3px;\n  position: absolute;\n  bottom: 125%;\n  z-index: 1000;\n  left: 50%;\n  margin-left: -60px;\n  opacity: 0;\n  transition: opacity 0.3s;\n  font-size: 12px;\n  ", ":hover & {\n    visibility: visible;\n    opacity: 1;\n  }\n"], ["\n  visibility: hidden;\n  width: 400px;\n  background-color: #555;\n  color: #fff;\n  text-align: center;\n  padding: 5px;\n  border-radius: 3px;\n  position: absolute;\n  bottom: 125%;\n  z-index: 1000;\n  left: 50%;\n  margin-left: -60px;\n  opacity: 0;\n  transition: opacity 0.3s;\n  font-size: 12px;\n  ", ":hover & {\n    visibility: visible;\n    opacity: 1;\n  }\n"])), exports.TooltipContainer);
var templateObject_1, templateObject_2;
