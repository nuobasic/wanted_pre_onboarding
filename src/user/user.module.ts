import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports:[PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
    secret:'secret',
    signOptions:{
      expiresIn: 3600
    }
  }),
    TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService, JwtStrategy],
  controllers: [UserController],
  exports: [UserModule, UserService, JwtStrategy, PassportModule]
})
export class UserModule {}
