import { RegisterDto } from './dto/register.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async register(registerDto: RegisterDto) {
    const existingUser = await this.usersService.findByEmail(registerDto.email);
    if (existingUser) {
      throw new BadRequestException('Email already in use');
    }

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    const hashedAnswer = await bcrypt.hash(registerDto.securityAnswer, 10);

    const user = await this.usersService.create({
      fullName: registerDto.fullName,
      email: registerDto.email,
      password: hashedPassword,
      phone: registerDto.phone,
      role: registerDto.role,
      securityQuestion: registerDto.securityQuestion,
      securityAnswerHash: hashedAnswer,
    });

    return {
      message: 'User registered successfully',
      user,
    };
  }
}
