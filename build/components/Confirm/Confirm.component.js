"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Button_1 = __importDefault(require("react-bootstrap/Button"));
const Modal_1 = __importDefault(require("react-bootstrap/Modal"));
const Separator_component_1 = __importDefault(require("../Separator/Separator.component"));
const Confirm_context_1 = require("../../context/Confirm.context");
const Confirm = (props) => {
    const [show, setShow] = (0, react_1.useState)(false);
    const { confirm, setConfirm, onConfirm } = (0, react_1.useContext)(Confirm_context_1.ConfirmContext);
    const handleCancel = () => {
        setShow(false);
        setConfirm({ type: undefined });
    };
    const handleConfirm = () => {
        setShow(false);
        setConfirm({ type: undefined });
        onConfirm(true);
    };
    (0, react_1.useEffect)(() => {
        if (confirm.type !== undefined) {
            setConfirm(confirm);
            setShow(true);
        }
        else {
            setConfirm({ type: undefined });
            setShow(false);
        }
    }, [confirm.type]);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(Modal_1.default, { show: show, onHide: handleCancel, backdrop: "static", keyboard: false, animation: false, centered: true, children: [(0, jsx_runtime_1.jsxs)(Modal_1.default.Body, { children: [(0, jsx_runtime_1.jsx)("strong", { children: confirm.title }), (0, jsx_runtime_1.jsx)(Separator_component_1.default, { size: 20 }), (0, jsx_runtime_1.jsx)("span", { dangerouslySetInnerHTML: { __html: confirm.message } }), confirm.messageLine2 && (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Separator_component_1.default, { size: 10 }), (0, jsx_runtime_1.jsx)("span", { dangerouslySetInnerHTML: { __html: confirm.messageLine2 } })] }), (0, jsx_runtime_1.jsx)(Separator_component_1.default, { size: 10 })] }), (0, jsx_runtime_1.jsxs)(Modal_1.default.Footer, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: "outline-secondary", onClick: handleCancel, children: "Cancelar" }), (0, jsx_runtime_1.jsxs)("button", { type: 'button', className: `btn btn-${confirm.type}`, onClick: handleConfirm, children: [(0, jsx_runtime_1.jsx)("i", { className: `fas fa-${confirm.type === "danger" ? "exclamation-triangle" : "check-circle"} me-2` }), confirm.buttonLabel] })] })] }) });
};
exports.default = Confirm;
