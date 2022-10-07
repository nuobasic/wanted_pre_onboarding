import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyEntity } from 'src/company/entity/company.entity';
import { Repository } from 'typeorm';
import { PostingRequest } from './dto/posting.request.dto';
import { PostingEntity } from './entity/posting.entity';

@Injectable()
export class PostingService {
    constructor(
        @InjectRepository(PostingEntity)
        private postingRepository: Repository<PostingEntity>,
       
    ){}

    async postingRegister(compnay: CompanyEntity, postingrequet: PostingRequest){


    }
}
