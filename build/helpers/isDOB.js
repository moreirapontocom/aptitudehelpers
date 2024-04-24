"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(require("dayjs"));
const isDOB = (value) => {
    if (!value || value.length !== 10) {
        return false;
    }
    const date = (0, dayjs_1.default)(value);
    if (!date.isValid()) {
        return false;
    }
    return date.isBefore((0, dayjs_1.default)()) && date.isAfter((0, dayjs_1.default)().subtract(150, 'year'));
};
exports.default = isDOB;
