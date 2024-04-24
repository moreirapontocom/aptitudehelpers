"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_bootstrap_1 = require("react-bootstrap");
function TextWithTooltip(props) {
    const { id, tooltip, children } = props;
    return ((0, jsx_runtime_1.jsx)(react_bootstrap_1.OverlayTrigger, { overlay: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Tooltip, { id: id, children: tooltip }), placement: "top", children: (0, jsx_runtime_1.jsx)("span", { children: children }) }));
}
exports.default = TextWithTooltip;
