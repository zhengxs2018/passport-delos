"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prod = exports.dev = exports.createApp = void 0;
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const nestjs_redis_1 = require("nestjs-redis");
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importDefault(require("express-session"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const helmet_1 = __importDefault(require("helmet"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const app_module_1 = require("./app.module");
const RedisStore = connect_redis_1.default(express_session_1.default);
function showBanner(url) {
    const banner = `
App running at:
- HTTP:       ${url}
- Swagger UI: ${url}/api
`;
    console.log(banner);
}
async function createApp() {
    const app = await await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: {
            credentials: true,
            origin(origin, cb) {
                return cb(null, true);
            },
            methods: 'GET,OPTIONS',
            allowedHeaders: 'Accept, Content-Type, X-Requested-With, X-HTTP-Method-Override'
        }
    });
    const redisService = app.get(nestjs_redis_1.RedisService);
    const config = app.get(config_1.ConfigService);
    if (config.get('proxy')) {
        app.set('trust proxy', 1);
    }
    app.use(express_session_1.default(Object.assign(Object.assign({}, config.get('session')), { secret: config.get('SESSION_SECRET'), store: new RedisStore({
            client: redisService.getClient()
        }) })));
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
    return app;
}
exports.createApp = createApp;
async function dev() {
    const app = await createApp();
    const config = app.get(config_1.ConfigService);
    const swaggerConfig = config.get('swagger');
    if (swaggerConfig) {
        const options = new swagger_1.DocumentBuilder()
            .setTitle(swaggerConfig.title)
            .setVersion(swaggerConfig.version)
            .setDescription(swaggerConfig.description)
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, options);
        swagger_1.SwaggerModule.setup(swaggerConfig.path, app, document);
    }
    await app.listen(config.get('PORT', 3000), config.get('HOST', '0.0.0.0'));
    showBanner(await app.getUrl());
}
exports.dev = dev;
async function prod() {
    const app = await createApp();
    const config = app.get(config_1.ConfigService);
    app.use(express_rate_limit_1.default({ windowMs: 15 * 60 * 1000, max: 100 }));
    app.use(helmet_1.default());
    await app.listen(config.get('PORT', 3000), config.get('HOST', '0.0.0.0'));
}
exports.prod = prod;
if (require.main === module) {
    dev();
}
//# sourceMappingURL=main.js.map