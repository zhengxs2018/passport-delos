import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class ClassValidationPipe implements PipeTransform<any> {
    transform(value: unknown, { metatype }: ArgumentMetadata): Promise<any>;
}
