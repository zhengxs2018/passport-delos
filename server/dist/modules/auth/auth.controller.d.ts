import { AuthService } from './auth.service';
import { RegisterPwdDto } from './dtos/register-pwd.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        uid: string;
        token: string;
    }>;
    register(payload: RegisterPwdDto): Promise<{
        uid: string;
        token: string;
    }>;
}
