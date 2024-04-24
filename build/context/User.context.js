"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProvider = exports.UserContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const emptyUser = { uid: "" };
exports.UserContext = (0, react_1.createContext)(emptyUser);
const UserProvider = ({ children }) => {
    const [user, setUser] = (0, react_1.useState)(emptyUser);
    return (0, jsx_runtime_1.jsx)(exports.UserContext.Provider, { value: { user, setUser }, children: children });
};
exports.UserProvider = UserProvider;
