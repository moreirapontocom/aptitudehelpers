"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const onlyNumbers = (text) => {
    if (!text || text === "") {
        return "";
    }
    return text.replace(/\D/g, "");
};
exports.default = onlyNumbers;
