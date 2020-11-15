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
exports.MeController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const prisma_service_1 = require("../prisma/prisma.service");
let MeController = class MeController {
    constructor(prismaService) {
        this.userRepo = prismaService.user;
    }
    async personal(req) {
        const user = req.user;
        return this.userRepo.findOne({
            select: {
                uid: true,
                nickname: true,
                avatar: true,
                sex: true,
                isAdmin: true
            },
            where: { uid: user.uid }
        });
    }
};
__decorate([
    common_1.Get('/'),
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiOperation({
        summary: '个人资料',
        description: ''
    }),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MeController.prototype, "personal", null);
MeController = __decorate([
    swagger_1.ApiTags('me'),
    common_1.Controller('/me'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MeController);
exports.MeController = MeController;
//# sourceMappingURL=me.controller.js.map