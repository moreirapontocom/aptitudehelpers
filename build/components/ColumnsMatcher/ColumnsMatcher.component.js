"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Separator_component_1 = __importDefault(require("../Separator/Separator.component"));
require("./ColumnsMatcher.component.scss");
const ColumnsMatcher = ({ columnsFrom, columnsTo, fromDescription, toDescription, onMatchColumns }) => {
    const _matchColumns = () => {
        const columns = [];
        const selects = document.querySelectorAll('.ColumnsMatcher select');
        selects.forEach((select) => {
            var _a, _b, _c, _d;
            const from = (_d = (_c = (_b = (_a = select.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.querySelector('.col-5')) === null || _c === void 0 ? void 0 : _c.textContent) === null || _d === void 0 ? void 0 : _d.trim();
            const to = select.value;
            if (from && to) {
                columns.push({ from, to });
            }
        });
        if (onMatchColumns) {
            onMatchColumns(columns);
        }
    };
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "ColumnsMatcher", children: [columnsFrom.length !== columnsTo.length && (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "alert alert-warning", children: [(0, jsx_runtime_1.jsxs)("strong", { children: [(0, jsx_runtime_1.jsx)("i", { className: "fas fa-exclamation-triangle me-2" }), " Warning"] }), (0, jsx_runtime_1.jsx)("br", {}), "Columns found in CSV are not matching with target columns.", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsxs)("small", { className: "text-muted", children: ["CSV Columns: ", columnsFrom.length, " \u00B7 Target Columns: ", columnsTo.length] })] }), (0, jsx_runtime_1.jsx)(Separator_component_1.default, { size: 20 })] }), (0, jsx_runtime_1.jsxs)("div", { className: "row", children: [(0, jsx_runtime_1.jsxs)("div", { className: "col-5", children: [(0, jsx_runtime_1.jsx)("h4", { children: "Columns From" }), fromDescription && (0, jsx_runtime_1.jsx)("small", { className: "text-muted", children: fromDescription })] }), (0, jsx_runtime_1.jsx)("div", { className: "col-2" }), (0, jsx_runtime_1.jsxs)("div", { className: "col-5", children: [(0, jsx_runtime_1.jsx)("h4", { children: "Columns To" }), toDescription && (0, jsx_runtime_1.jsx)("small", { className: "text-muted", children: toDescription })] })] }), (0, jsx_runtime_1.jsx)(Separator_component_1.default, { size: 20 }), columnsFrom.map((column, indexColumn) => (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "row matcher align-items-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "col-5 columnBorder", children: column }), (0, jsx_runtime_1.jsx)("div", { className: "col-2 text-center", children: (0, jsx_runtime_1.jsx)("i", { className: "fas fa-arrow-right" }) }), (0, jsx_runtime_1.jsx)("div", { className: "col-5 columnBorder", children: (0, jsx_runtime_1.jsxs)("select", { className: "form-select", children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "Select a column" }), columnsTo.map((columnTo, indexColumnTo) => {
                                            return (0, jsx_runtime_1.jsx)("option", { selected: column === columnTo, children: columnTo }, `ColumnsMatcher-${column}-${indexColumn}-${columnTo}-${indexColumnTo}`);
                                        })] }) })] }, `ColumnsMatcher-${column}-${indexColumn}`) })), (0, jsx_runtime_1.jsx)(Separator_component_1.default, { size: 20 }), (0, jsx_runtime_1.jsxs)("button", { onClick: () => _matchColumns(), type: "button", className: "btn btn-outline-primary", children: [(0, jsx_runtime_1.jsx)("i", { className: "fas fa-check me-2" }), "Finish Matching"] })] }) });
};
exports.default = ColumnsMatcher;
