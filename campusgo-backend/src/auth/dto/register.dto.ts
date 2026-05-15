import { IsEmail, MinLength } from 'class-validator';

import { Role } from '../../users/entities/user.entity';

export class RegisterDto {
  fullName!: string;

  @IsEmail()
  email!: string;

  @MinLength(6)
  password!: string;

  phone!: string;

  role!: Role;

  securityQuestion!: string;

  securityAnswer!: string;
}
