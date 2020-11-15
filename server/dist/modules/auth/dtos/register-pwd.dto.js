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
exports.RegisterPwdDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class RegisterPwdDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { username: { required: true, type: () => String }, nickname: { required: false, type: () => String }, avatar: { required: false, type: () => String }, email: { required: false, type: () => String }, password: { required: true, type: () => String } };
    }
}
__decorate([
    class_validator_1.IsString({
        message: '$property 必须是个字符串'
    }),
    class_validator_1.Length(2, 16, {
        message: '$property 长度为 2～16 个字符'
    }),
    __metadata("design:type", String)
], RegisterPwdDto.prototype, "username", void 0);
__decorate([
    class_validator_1.IsString({
        message: '$property 必须是个字符串'
    }),
    class_validator_1.Length(2, 12, {
        message: '$property 长度为 2～12 个字符'
    }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], RegisterPwdDto.prototype, "nickname", void 0);
__decorate([
    class_validator_1.IsUrl({}, {
        message: '$property 必须为合法的 URL'
    }),
    class_validator_1.IsOptional(),
    class_validator_1.Length(10, 512, {
        message: '$property 长度为 10～512 个字符'
    }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], RegisterPwdDto.prototype, "avatar", void 0);
__decorate([
    class_validator_1.IsString({
        message: '$property 必须是个字符串'
    }),
    class_validator_1.Length(2, 12, {
        message: '$property 长度为 2～12 个字符'
    }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], RegisterPwdDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsString({
        message: '$property 必须是个字符串'
    }),
    class_validator_1.Length(6, 18, {
        message: '$property 长度为 6～18 个字符'
    }),
    __metadata("design:type", String)
], RegisterPwdDto.prototype, "password", void 0);
exports.RegisterPwdDto = RegisterPwdDto;
//# sourceMappingURL=register-pwd.dto.js.map