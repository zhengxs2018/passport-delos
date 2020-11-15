"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const wechat_strategy_1 = require("../passport/strategies/wechat.strategy");
const prisma_service_1 = require("../prisma/prisma.service");
const auth_service_1 = require("../auth/auth.service");
const wechat_controller_1 = require("./wechat.controller");
const connect_service_1 = require("./connect.service");
let ConnectModule = class ConnectModule {
};
ConnectModule = __decorate([
    common_1.Module({
        imports: [
            jwt_1.JwtModule.registerAsync({
                inject: [config_1.ConfigService],
                useFactory(configService) {
                    return {
                        secret: configService.get('JWT_SECRET'),
                        signOptions: configService.get('jwt')
                    };
                }
            })
        ],
        providers: [prisma_service_1.PrismaService, auth_service_1.AuthService, connect_service_1.ConnectService, wechat_strategy_1.WeChatStrategy],
        controllers: [wechat_controller_1.WeChatController]
    })
], ConnectModule);
exports.ConnectModule = ConnectModule;
//# sourceMappingURL=connect.module.js.map