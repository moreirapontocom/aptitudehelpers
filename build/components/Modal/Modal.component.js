"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const CustomModal = (props) => {
    const { show, title, size, } = props;
    const [showModal, setShowModal] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setShowModal(show);
    }, [show]);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Modal, { show: showModal, size: size || "lg", children: [title && title !== "" && (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Modal.Header, { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Modal.Title, { children: title }), (0, jsx_runtime_1.jsx)("button", { type: "button", className: "btn-close", onClick: () => setShowModal(false) })] }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Modal.Body, { children: props.children })] }) });
};
exports.default = CustomModal;
