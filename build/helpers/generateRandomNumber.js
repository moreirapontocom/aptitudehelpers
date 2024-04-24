"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateRandomNumber = (min = 1, max = 99999) => {
    return Math.floor(Math.random() * (max - min) + min);
};
exports.default = generateRandomNumber;
