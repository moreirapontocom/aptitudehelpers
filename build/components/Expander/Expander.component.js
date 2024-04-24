"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Separator_component_1 = __importDefault(require("../Separator/Separator.component"));
const Expander = (props) => {
    const { contentId, labelExpand, labelCollapse, } = props;
    const [expanded, setExpanded] = (0, react_1.useState)(null);
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Separator_component_1.default, { size: 5 }), (0, jsx_runtime_1.jsx)("div", { className: "text-start", children: (0, jsx_runtime_1.jsxs)("button", { onClick: () => setExpanded(expanded === contentId ? null : contentId), type: "button", className: "btn btn-link btn-sm inline", children: [expanded === contentId && (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("i", { className: "fas fa-chevron-up me-2" }), " ", labelCollapse || "Collapse"] }), expanded !== contentId && (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("i", { className: "fas fa-chevron-down me-2" }), " ", labelExpand || "Expand"] })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: `${expanded === contentId ? "" : "d-none"}`, children: [(0, jsx_runtime_1.jsx)(Separator_component_1.default, { size: 10 }), props.children] })] });
};
exports.default = Expander;
