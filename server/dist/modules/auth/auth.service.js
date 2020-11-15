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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const class_validator_1 = require("class-validator");
const password_1 = require("../../lib/password");
const prisma_service_1 = require("../prisma/prisma.service");
const session_serializer_1 = require("../passport/serializes/session.serializer");
let AuthService = class AuthService {
    constructor(jwtService, prismaService) {
        this.jwtService = jwtService;
        this.userRepo = prismaService.user;
    }
    async register(payload) {
        const dbUser = await this.findUser(payload);
        if (dbUser) {
            const username = payload.username;
            if (username && dbUser.username === username) {
                throw new common_1.ConflictException('用户名已被注册');
            }
            const email = payload.email;
            if (email && dbUser.email === email) {
                throw new common_1.ConflictException('邮箱已被注册');
            }
            throw new common_1.ConflictException('昵称已被注册');
        }
        const password = await password_1.hashPasswd(payload.password);
        const newUser = await this.userRepo.create({
            data: Object.assign(Object.assign({}, payload), { password, verified: true })
        });
        return this.genToken(newUser);
    }
    async genToken(user, options) {
        const authInfo = session_serializer_1.SessionSerializer.createAuthInfo(user);
        const token = await this.jwtService.signAsync(authInfo, options);
        return { uid: user.uid, token };
    }
    async login(account, password) {
        const where = {};
        if (class_validator_1.isEmail(account)) {
            where.email = account;
        }
        else if (class_validator_1.isPhoneNumber('+86 ' + account, 'CN')) {
            where.mobile = account;
        }
        else {
            where.username = account;
        }
        const user = await this.userRepo.findOne({ where });
        if (!user)
            throw new common_1.NotFoundException('用户不存在或密码错误');
        const ok = await password_1.comparePasswd(password, user.password);
        if (!ok)
            new common_1.BadRequestException('无效的密码');
        return user;
    }
    findUser(query) {
        const wheres = [];
        const { username, nickname, email, mobile } = query;
        if (class_validator_1.isNotEmpty(nickname)) {
            wheres.push({ nickname });
        }
        if (class_validator_1.isNotEmpty(username)) {
            wheres.push({ username });
        }
        if (class_validator_1.isNotEmpty(mobile)) {
            wheres.push({ mobile });
        }
        if (class_validator_1.isNotEmpty(email)) {
            wheres.push({ email });
        }
        if (wheres.length === 0) {
            throw new common_1.PreconditionFailedException();
        }
        return this.userRepo.findFirst({ where: { OR: wheres } });
    }
};
AuthService = __decorate([
    common_1.Injectable({ scope: common_1.Scope.DEFAULT }),
    __metadata("design:paramtypes", [jwt_1.JwtService, prisma_service_1.PrismaService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map