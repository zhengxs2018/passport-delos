import { AuthService } from '../auth/auth.service';
export declare class WeChatController {
    private readonly authService;
    constructor(authService: AuthService);
    authorize(req: any): Promise<{
        uid: string;
        token: string;
    }>;
    callback(req: any): Promise<{
        uid: string;
        token: string;
    }>;
}
