"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openWhatsappChat = (phone) => {
    phone = phone.replace(/\D/g, '');
    window.open(`https://api.whatsapp.com/send?phone=${phone}`, '_blank');
};
exports.default = openWhatsappChat;
