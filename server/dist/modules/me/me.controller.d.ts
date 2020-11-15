import { PrismaService } from '../prisma/prisma.service';
export declare class MeController {
    private readonly userRepo;
    constructor(prismaService: PrismaService);
    personal(req: any): Promise<{
        nickname: string;
        avatar: string;
        uid: string;
        sex: number;
        isAdmin: boolean;
    }>;
}