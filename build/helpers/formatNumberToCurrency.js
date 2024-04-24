"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _currencies = [
    { currency: 'BRL', locale: 'pt-BR' },
    { currency: 'USD', locale: 'en-US' },
    { currency: 'EUR', locale: 'de-DE' },
    { currency: 'JPY', locale: 'ja-JP' },
];
const formatNumberToCurrency = (currency = 'BRL', amount) => {
    return new Intl.NumberFormat(_currencies.find((item) => item.currency === currency.toUpperCase()).locale, { style: 'currency', currency: currency.toUpperCase() }).format(amount);
};
exports.default = formatNumberToCurrency;
