import { RegisterDto } from './dto/register.dto';
<<<<<<< HEAD
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}
=======
import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
>>>>>>> 7191faa80fcefb2a7eb2bfca9166818f9accc823

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
<<<<<<< HEAD
  async login(loginDto: LoginDto) {
  const user =
    await this.usersService.findByEmail(
      loginDto.email,
    );

  if (!user) {
    throw new UnauthorizedException(
      'Invalid credentials',
    );
  }

  const isPasswordMatched =
    await bcrypt.compare(
      loginDto.password,
      user.password,
    );

  if (!isPasswordMatched) {
    throw new UnauthorizedException(
      'Password is incorrect',
    );
  }

  const payload = {
    sub: user.id,

    email: user.email,

    role: user.role,
  };

  const accessToken =
    this.jwtService.sign(payload);

  return {
    message: 'Login successful',

    accessToken,
  };
}
=======
>>>>>>> 7191faa80fcefb2a7eb2bfca9166818f9accc823
}
