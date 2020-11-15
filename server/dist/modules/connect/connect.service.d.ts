import { User } from '../../../prisma/client';
import { WeChatUser } from '../../interfaces/wechat';
import { PrismaService } from '../prisma/prisma.service';
export declare class ConnectService {
    private readonly thirdUserRepo;
    constructor(prismaService: PrismaService);
    updateOrInsertWeChatUser(profile: WeChatUser): Promise<User>;
}
