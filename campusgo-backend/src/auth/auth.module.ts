import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
<<<<<<< HEAD
import { JwtStrategy } from './strategies/jwt.strategy';
=======
import { JwtStrategy } from './jwt.strategy';
>>>>>>> 7191faa80fcefb2a7eb2bfca9166818f9accc823

@Module({
  imports: [
    UsersModule,

    PassportModule,

    JwtModule.registerAsync({
      imports: [ConfigModule],

      inject: [ConfigService],

      useFactory: (
        configService: ConfigService,
      ) => ({
        secret:
          configService.get(
            'JWT_SECRET',
          ),

        signOptions: {
          expiresIn: '7d',
        },
      }),
    }),
  ],

  controllers: [AuthController],

  providers: [
    AuthService,
    JwtStrategy,
  ],
})
export class AuthModule {}
