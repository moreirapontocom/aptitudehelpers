"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const currencies_1 = __importDefault(require("./currencies"));
const getCurrencyDetails = (currency = 'BRL') => {
    const item = currencies_1.default.find((c) => c.code.toUpperCase() === currency.toUpperCase());
    if (!item) {
        return currencies_1.default[1];
    }
    return item;
};
exports.default = getCurrencyDetails;
