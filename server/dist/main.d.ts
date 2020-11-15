import { NestExpressApplication } from '@nestjs/platform-express';
export declare function createApp(): Promise<NestExpressApplication>;
export declare function dev(): Promise<void>;
export declare function prod(): Promise<void>;
