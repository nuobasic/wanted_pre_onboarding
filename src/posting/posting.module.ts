import { Module } from '@nestjs/common';
import { PostingService } from './posting.service';
import { PostingController } from './posting.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostingEntity } from './entity/posting.entity';
import { CompanyModule } from '../company/company.module';
import { ApplyEntity } from '../apply/entity/apply.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PostingEntity, ApplyEntity]), CompanyModule],
  providers: [PostingService],
  controllers: [PostingController],
  exports:[PostingService, PostingModule]
})
export class PostingModule {}
