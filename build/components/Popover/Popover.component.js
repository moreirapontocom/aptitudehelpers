"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_bootstrap_1 = require("react-bootstrap");
const OverlayTrigger_1 = __importDefault(require("react-bootstrap/OverlayTrigger"));
const Popover_1 = __importDefault(require("react-bootstrap/Popover"));
require("bootstrap/dist/css/bootstrap.css");
function CustomPopover(props) {
    const { header, body, children } = props;
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(OverlayTrigger_1.default, { placement: "top", trigger: ["hover", "focus"], overlay: ((0, jsx_runtime_1.jsxs)(Popover_1.default, { children: [header && (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.PopoverHeader, { children: (0, jsx_runtime_1.jsx)("strong", { children: header }) }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.PopoverBody, { children: (0, jsx_runtime_1.jsx)("div", { dangerouslySetInnerHTML: { __html: body } }) })] })), children: (0, jsx_runtime_1.jsx)("span", { style: { display: "inline-block" }, children: children }) }) });
}
exports.default = CustomPopover;
