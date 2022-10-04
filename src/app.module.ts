import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './user/entity/user.entity';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { CompanyModule } from './company/company.module';
import { CompanyEntity } from './company/entity/company.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASES,
      entities: [UserEntity, CompanyEntity],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    CompanyModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
