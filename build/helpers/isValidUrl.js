"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isValidUrl = (url) => {
    const re = /^(http|https):\/\/[a-zA-Z0-9-_.]+\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return re.test(String(url).toLowerCase());
};
exports.default = isValidUrl;
