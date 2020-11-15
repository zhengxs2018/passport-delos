"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    proxy: false,
    allowedHosts: [],
    jwt: {
        expiresIn: '30m'
    },
    redis: {
        host: '127.0.0.1',
        port: 6379,
        db: 0
    },
    wechat: {
        client: 'wechat',
        scope: 'snsapi_userinfo'
    },
    session: {
        resave: false,
        saveUninitialized: false
    }
});
//# sourceMappingURL=config.default.js.map