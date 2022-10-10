import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyService } from '../company/company.service';
import { CompanyEntity } from 'src/company/entity/company.entity';
import { Repository, DataSource  } from 'typeorm';
import { PostingRequest } from './dto/posting.request.dto';
import { PostingEntity } from './entity/posting.entity';

@Injectable()
export class PostingService {
    constructor(
        @InjectRepository(PostingEntity)
        private postingRepository: Repository<PostingEntity>,
        private companyService: CompanyService,
        private dataSource: DataSource
       
    ){}

    async postingRegister( postingrequet: PostingRequest){
        const company = await this. companyService.findCompany(postingrequet.companyId)

        if(!company){
            throw new UnauthorizedException('회사가 존재하지 않습니다.')
        }

        const posting = await this.postingRepository.create({
            company,
            position: postingrequet.position,
            compensation: postingrequet.compensation,
            content: postingrequet.content,
            skil: postingrequet.skil

        })
        return this.postingRepository.save(posting)

    }

    async postingUpdate(id: number, postingEntity:PostingEntity): Promise<void>{
        const exitedPosting = await this.postingRepository.findOne({where: {id}})

        if(exitedPosting){
            await PostingEntity
                .createQueryBuilder()
                .update(PostingEntity)
                .set({
                    position: postingEntity.position,
                    compensation: postingEntity.compensation,
                    content: postingEntity.content,
                    skil: postingEntity.skil
                })
                .where("id=:id",{id})
                .execute()
        }
    }

    async deletePosting(id: number) :Promise<void>{
        await this.postingRepository.delete(id)
    }

    async allPosting(){
        return this.postingRepository.find()
    }

    async searchPosting(search: string){
        return await this.postingRepository
            .createQueryBuilder('posting')
            .leftJoinAndSelect('posting.company', 'company')
            .where("company.name like :name",{name: search})
            .select([
                'posting.id',
                'posting.position',
                'posting.compensation',
                'posting.content',
                'posting.skil',
                'company.name',
                'company.country',
                'company.region'
            ])
            .getMany()
   
    }
}
