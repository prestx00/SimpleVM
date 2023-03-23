"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var Header_1 = require("./Header");
var LayoutStyledComponets_1 = require("./styledcomponents/LayoutStyledComponets");
var Layout = function (_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "SimpleVM"),
            React.createElement("meta", { name: "description", content: "SimpleVM" }),
            React.createElement("link", { rel: "icon", href: "/polus-planet.svg" }),
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover" })),
        React.createElement(Header_1["default"], null),
        React.createElement(LayoutStyledComponets_1.MainContainer, null, children)));
};
exports["default"] = Layout;
