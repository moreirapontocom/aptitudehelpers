"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removeDuplicatesFromArray = (values) => {
    return [...new Set(values)];
};
exports.default = removeDuplicatesFromArray;
