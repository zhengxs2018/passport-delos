import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { ConnectService } from '../../connect/connect.service';
import { WeChatUser } from '../../../interfaces/wechat';
declare const WeChatStrategy_base: new (...args: any[]) => any;
export declare class WeChatStrategy extends WeChatStrategy_base {
    connectService: ConnectService;
    constructor(configService: ConfigService, prismaService: PrismaService, connectService: ConnectService);
    validate(accessToken: string, refreshToken: string, wxUser: WeChatUser, _: any, done: (...args: unknown[]) => void): Promise<void>;
}
export {};
