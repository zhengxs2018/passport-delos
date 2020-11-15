"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeChatAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
let WeChatAuthGuard = class WeChatAuthGuard extends passport_1.AuthGuard('wechat') {
    getAuthenticateOptions(context) {
        const req = context.switchToHttp().getRequest();
        const callbackURL = new URL('/connect/wechat/callback', req.protocol + '://' + req.hostname);
        return {
            callbackURL: callbackURL.toString(),
            state: Math.random().toString(32).substr(2)
        };
    }
    async canActivate(context) {
        const result = (await super.canActivate(context));
        const request = context.switchToHttp().getRequest();
        await super.logIn(request);
        return result;
    }
};
WeChatAuthGuard = __decorate([
    common_1.Injectable()
], WeChatAuthGuard);
exports.WeChatAuthGuard = WeChatAuthGuard;
//# sourceMappingURL=wechat.guard.js.map