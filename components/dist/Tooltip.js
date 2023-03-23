"use strict";
exports.__esModule = true;
var TooltipStyledComponents_1 = require("./styledcomponents/TooltipStyledComponents");
var Tooltip = function (_a) {
    var children = _a.children, tooltipText = _a.tooltipText;
    return (React.createElement(TooltipStyledComponents_1.TooltipContainer, null,
        children,
        React.createElement(TooltipStyledComponents_1.TooltipText, null, tooltipText)));
};
exports["default"] = Tooltip;
