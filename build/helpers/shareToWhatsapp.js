"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shareToWhatsapp = (message, number) => {
    message = encodeURIComponent(message);
    let url = `https://api.whatsapp.com/send?text=${message}`;
    if (number) {
        number = number.replace(/\D/g, '');
        url += `&phone=${number}`;
    }
    window.open(url, '_blank');
};
exports.default = shareToWhatsapp;
