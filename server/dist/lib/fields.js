"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkHosts = exports.encryptEmail = exports.encryptMobile = void 0;
function encryptMobile(mobile) {
    return typeof mobile === 'string'
        ? mobile.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
        : '';
}
exports.encryptMobile = encryptMobile;
function encryptEmail(email) {
    if (typeof email === 'string' && email.length > 0) {
        const [name, suffix] = email.split('@');
        if (email.length > 4) {
            return `${name.substr(0, 1)}***@${suffix}`;
        }
        return `${name.substr(0, 2)}***${name.substr(-2)}@${suffix}`;
    }
    return '';
}
exports.encryptEmail = encryptEmail;
function checkHosts(host, allowedHosts) {
    return allowedHosts.includes(host);
}
exports.checkHosts = checkHosts;
//# sourceMappingURL=fields.js.map