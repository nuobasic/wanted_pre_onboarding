import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApplyEntity } from './entity/apply.entity';
import { Repository  } from 'typeorm';
import { UserEntity } from '../user/entity/user.entity';
import { PostingEntity ,} from '../posting/entity/posting.entity';
import { ApplyRequest } from './dto/apply.request.dto';
import { ApplyResponse } from './dto/apply.response.dto';

@Injectable()
export class ApplyService {
    constructor(
        @InjectRepository(ApplyEntity)
        private applyRepository: Repository<ApplyEntity>,
        @InjectRepository(UserEntity)
        private userRepostory: Repository<UserEntity>,
        @InjectRepository(PostingEntity)
        private postingRepostory: Repository<PostingEntity>
      
    ){}

    async applyPosting(applyRequest: ApplyRequest){

      const apply = await this.applyRepository.findOne({
        where:{user:{id: applyRequest.postingId}},
        relations:['posting', 'user']
      })

      if(apply){
        throw new UnauthorizedException('이미 지원한 공고입니다.')
      }
      const user = await this.userRepostory.findOne({
        where: {id:applyRequest.userId}
      })
        
      const posting = await this.postingRepostory.findOne({
        where:{id:applyRequest.postingId}
      })

      const applyed = await this.applyRepository.save({
        user,
        posting
      })

      return applyed
    }
}
