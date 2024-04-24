"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateRandomString = (length = 10) => {
    const dictionary = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let random = "";
    for (let i = 0; i < length; i++) {
        random += dictionary.charAt(Math.floor(Math.random() * dictionary.length));
    }
    return random;
};
exports.default = generateRandomString;
