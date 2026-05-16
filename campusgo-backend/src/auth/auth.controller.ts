import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { registerSchema } from './zod/register.schema';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(
    @Body(new ZodValidationPipe(registerSchema))
    registerDto: RegisterDto,
  ) {
    return this.authService.register(registerDto);
  }
}
