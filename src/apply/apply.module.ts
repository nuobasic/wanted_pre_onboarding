import { Module } from '@nestjs/common';
import { ApplyService } from './apply.service';
import { ApplyController } from './apply.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplyEntity } from './entity/apply.entity';
import { UserModule } from '../user/user.module';
import { UserEntity } from '../user/entity/user.entity';
import { PostingEntity } from '../posting/entity/posting.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ApplyEntity, UserEntity, PostingEntity]), UserModule],
  providers: [ApplyService],
  controllers: [ApplyController]
})
export class ApplyModule {}
