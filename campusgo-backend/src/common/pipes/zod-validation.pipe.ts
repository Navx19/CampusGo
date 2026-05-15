import {PipeTransform,Injectable,BadRequestException} from '@nestjs/common';

import type { ZodSchema } from 'zod';

@Injectable()
export class ZodValidationPipe
  implements PipeTransform
{
  constructor(
    private schema: ZodSchema,
  ) {}

  transform(value: any) {
    try {
      return this.schema.parse(value);
    } catch (error: any) {
      throw new BadRequestException(
        error.errors,
      );
    }
  }
}