"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const local_auth_guard_1 = require("./guards/local-auth.guard");
const class_validator_pip_1 = require("../../pips/class-validator.pip");
const auth_service_1 = require("./auth.service");
const register_pwd_dto_1 = require("./dtos/register-pwd.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(req) {
        return this.authService.genToken(req.user);
    }
    async register(payload) {
        return this.authService.register(payload);
    }
};
__decorate([
    common_1.Post('login'),
    common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
    swagger_1.ApiOperation({
        summary: '登录',
        description: '使用账号和密码登录',
        requestBody: {
            description: '表单数据',
            required: true,
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            username: {
                                type: 'string',
                                description: '用户名',
                                example: 'admin'
                            },
                            password: {
                                type: 'string',
                                description: '密码',
                                example: '123456'
                            }
                        },
                        required: ['username', 'password']
                    }
                },
                'application/x-www-form-urlencoded': {
                    schema: {
                        type: 'object',
                        properties: {
                            username: {
                                type: 'string',
                                description: '用户名',
                                example: 'admin'
                            },
                            password: {
                                type: 'string',
                                description: '密码',
                                example: '123456'
                            }
                        },
                        required: ['username', 'password']
                    }
                }
            }
        }
    }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Post('register'),
    swagger_1.ApiOperation({
        summary: '注册',
        description: '使用用户名和密码进行注册'
    }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, common_1.Body(class_validator_pip_1.ClassValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_pwd_dto_1.RegisterPwdDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
AuthController = __decorate([
    swagger_1.ApiTags('auth'),
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map