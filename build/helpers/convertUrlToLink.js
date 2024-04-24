"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convertUrlToLink = (text, target = "_blank") => {
    return text.replace(/(https?:\/\/[^\s]+)/g, `<a href="$1" target="${target}">$1</a>`);
};
exports.default = convertUrlToLink;
