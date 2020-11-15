"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let ClassValidationPipe = class ClassValidationPipe {
    async transform(value, { metatype }) {
        const object = class_transformer_1.plainToClass(metatype, value || {});
        const errors = await class_validator_1.validate(object, {
            skipMissingProperties: false,
            forbidUnknownValues: true
        });
        if (errors.length > 0) {
            throw new common_1.BadRequestException('Validation failed');
        }
        return object;
    }
};
ClassValidationPipe = __decorate([
    common_1.Injectable()
], ClassValidationPipe);
exports.ClassValidationPipe = ClassValidationPipe;
//# sourceMappingURL=class-validator.pip.js.map