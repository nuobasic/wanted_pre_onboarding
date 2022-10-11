import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApplyEntity } from './entity/apply.entity';
import { Repository  } from 'typeorm';
import { UserEntity } from 'src/user/entity/user.entity';

@Injectable()
export class ApplyService {
    constructor(
        @InjectRepository(ApplyEntity)
        private applyRepository: Repository<ApplyEntity>,
      
    ){}
}
