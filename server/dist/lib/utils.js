"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadConfigsFiles = exports.getServerEnv = exports.combineURLSearchParams = exports.noop = void 0;
const path_1 = __importDefault(require("path"));
function noop() { }
exports.noop = noop;
function combineURLSearchParams(target, other) {
    for (const [key, value] of other) {
        target.set(key, value);
    }
    return target;
}
exports.combineURLSearchParams = combineURLSearchParams;
function getServerEnv() {
    const serverEnv = process.env.NEST_SERVER_ENV;
    if (typeof serverEnv === 'string')
        return serverEnv;
    const env = process.env.NODE_ENV;
    if (env === 'production') {
        return 'prod';
    }
    else if (env === 'test') {
        return 'unittest';
    }
    else {
        return 'local';
    }
}
exports.getServerEnv = getServerEnv;
function loadConfigsFiles(baseDir) {
    const files = ['config/config.default', `config/config.${getServerEnv()}`];
    return files.reduce((configs, filename) => {
        const fullPath = path_1.default.join(baseDir, filename);
        try {
            const mod = require(fullPath);
            return configs.concat(mod.__esModule && mod.default ? mod.default : mod);
        }
        catch (err) {
            if (err.code === 'MODULE_NOT_FOUND') {
                console.warn('[bootstrap] file not found: ', fullPath);
                return configs;
            }
            throw err;
        }
    }, []);
}
exports.loadConfigsFiles = loadConfigsFiles;
//# sourceMappingURL=utils.js.map