import { PrismaService } from '../prisma/prisma.service';
export declare class MeController {
    private readonly userRepo;
    constructor(prismaService: PrismaService);
    personal(req: any): Promise<{
        uid: string;
        avatar: string;
        nickname: string;
        sex: number;
        isAdmin: boolean;
    }>;
}
