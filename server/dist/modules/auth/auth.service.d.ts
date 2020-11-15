import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { User } from '../../../prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterPwdDto } from './dtos/register-pwd.dto';
export declare class AuthService {
    private readonly jwtService;
    private readonly userRepo;
    constructor(jwtService: JwtService, prismaService: PrismaService);
    register(payload: RegisterPwdDto): Promise<{
        uid: string;
        token: string;
    }>;
    genToken(user: User, options?: JwtSignOptions): Promise<{
        uid: string;
        token: string;
    }>;
    login(account: string, password: string): Promise<User>;
    findUser(query: Partial<Record<'username' | 'nickname' | 'email' | 'mobile', string>>): import("../../../prisma/client").Prisma__UserClient<User>;
}
