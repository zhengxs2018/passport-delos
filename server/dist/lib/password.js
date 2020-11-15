"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPasswd = exports.comparePasswd = void 0;
const bcrypt_1 = require("bcrypt");
function comparePasswd(password, hashedPassword) {
    return bcrypt_1.compare(password, hashedPassword);
}
exports.comparePasswd = comparePasswd;
async function hashPasswd(password) {
    return bcrypt_1.hash(password, await bcrypt_1.genSalt(10));
}
exports.hashPasswd = hashPasswd;
//# sourceMappingURL=password.js.map