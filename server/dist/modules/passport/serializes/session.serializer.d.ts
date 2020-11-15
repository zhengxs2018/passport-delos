import { PassportSerializer } from '@nestjs/passport';
import { User } from '../../../../prisma/client';
import { AuthInfo } from '../../../interfaces/jwt';
export declare class SessionSerializer extends PassportSerializer {
    serializeUser(user: User, done: any): void;
    deserializeUser(payload: User, done: any): void;
    static createAuthInfo(user: User): AuthInfo;
}
