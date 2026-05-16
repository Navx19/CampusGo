import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Body, Controller, Post, UseGuards, Get } from '@nestjs/common';
import { GetUser } from '../common/decorators/get-user.decorator';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { registerSchema } from './zod/register.schema';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe';
import { LoginDto } from './dto/login.dto';
import { loginSchema } from './zod/login.schema';
import { RolesGuard } from './guards/roles.guard';
import { Roles } from './decorators/roles.decorator';

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

 @UseGuards(
  JwtAuthGuard,
  RolesGuard,
)
@Roles('admin')
@Get('admin-only')
adminOnly() {
  return {
    message:
      'Welcome Admin!',
  };
}
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMe(@GetUser() user: any) {
  return user;
}

  @Post('login')
  login(
    @Body(new ZodValidationPipe(loginSchema))
    loginDto: LoginDto,
  ) {
    return this.authService.login(loginDto);
  }
}
