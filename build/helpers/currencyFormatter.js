"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getCurrencyDetails_1 = __importDefault(require("./getCurrencyDetails"));
const currencyFormatter = (currency = 'BRL', value) => {
    return new Intl.NumberFormat((0, getCurrencyDetails_1.default)(currency.toUpperCase()).locale, {
        style: 'currency',
        currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
};
exports.default = currencyFormatter;
