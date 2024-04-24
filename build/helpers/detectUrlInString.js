"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const detectUrlInString = (text) => {
    return text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');
};
exports.default = detectUrlInString;
