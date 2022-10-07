import { Module } from '@nestjs/common';
import { PostingService } from './posting.service';
import { PostingController } from './posting.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostingEntity } from './entity/posting.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PostingEntity])],
  providers: [PostingService],
  controllers: [PostingController],
  exports:[PostingService]
})
export class PostingModule {}
