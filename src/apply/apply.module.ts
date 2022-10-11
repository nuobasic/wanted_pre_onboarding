import { Module } from '@nestjs/common';
import { ApplyService } from './apply.service';
import { ApplyController } from './apply.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplyEntity } from './entity/apply.entity';
import { UserModule } from '../user/user.module';

@Module({
  imports:[TypeOrmModule.forFeature([ApplyEntity]), UserModule],
  providers: [ApplyService],
  controllers: [ApplyController]
})
export class ApplyModule {}
