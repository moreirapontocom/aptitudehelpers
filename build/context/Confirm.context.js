"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmProvider = exports.ConfirmContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const emptyConfirm = {
    type: undefined,
    title: "Are you sure?",
    message: "",
    messageLine2: undefined,
    buttonLabel: "Confirm",
    onConfirm: undefined,
};
exports.ConfirmContext = (0, react_1.createContext)(emptyConfirm);
const ConfirmProvider = ({ children }) => {
    const [confirm, setConfirm] = (0, react_1.useState)(emptyConfirm);
    const onConfirm = (response) => {
        if (confirm.onConfirm) {
            confirm.onConfirm(response);
        }
    };
    return (0, jsx_runtime_1.jsx)(exports.ConfirmContext.Provider, { value: { confirm, setConfirm, onConfirm }, children: children });
};
exports.ConfirmProvider = ConfirmProvider;
