import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../user/entity/user.entity";
import { UserModule } from "../user/user.module";
import { CompanyController } from "./company.controller";
import { CompanyService } from "./company.service";
import { CompanyEntity } from "./entity/company.entity";

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity, UserEntity]), UserModule],
  controllers: [CompanyController],
  providers: [CompanyService],
  exports: [CompanyService],
})
export class CompanyModule {}
