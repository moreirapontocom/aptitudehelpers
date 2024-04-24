"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const copyToClipboard = (item) => {
    try {
        const create_copy = (e) => {
            e.clipboardData.setData('text/plain', item);
            e.preventDefault();
        };
        document.addEventListener('copy', create_copy);
        document.execCommand('copy');
        document.removeEventListener('copy', create_copy);
        return true;
    }
    catch (_) {
        return false;
    }
};
exports.default = copyToClipboard;
