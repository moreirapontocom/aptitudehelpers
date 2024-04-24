"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hideEmail = (email) => {
    const [name, domain] = email.split("@");
    return `${name.substring(0, 2)}...@${domain}`;
};
exports.default = hideEmail;
