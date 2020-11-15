import type { SignOptions } from 'jsonwebtoken';
import type { SessionOptions } from 'express-session';
import type { ClientOpts } from 'redis';
declare const _default: () => {
    proxy: boolean;
    allowedHosts: any[];
    jwt: SignOptions;
    redis: ClientOpts;
    wechat: {
        client: string;
        scope: string;
    };
    session: SessionOptions;
};
export default _default;
