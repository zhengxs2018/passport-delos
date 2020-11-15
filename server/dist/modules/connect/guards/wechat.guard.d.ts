import { ExecutionContext } from '@nestjs/common';
declare const WeChatAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class WeChatAuthGuard extends WeChatAuthGuard_base {
    getAuthenticateOptions(context: ExecutionContext): any;
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export {};
