"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nestjs_redis_1 = require("nestjs-redis");
const auth_module_1 = require("./modules/auth/auth.module");
const connect_module_1 = require("./modules/connect/connect.module");
const me_module_1 = require("./modules/me/me.module");
const utils_1 = require("./lib/utils");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: utils_1.loadConfigsFiles(__dirname)
            }),
            nestjs_redis_1.RedisModule.forRootAsync({
                useFactory(configService) {
                    return configService.get('redis');
                },
                inject: [config_1.ConfigService]
            }),
            auth_module_1.AuthModule,
            connect_module_1.ConnectModule,
            me_module_1.MeModule
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map