import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { cp } from 'fs';
import { number } from 'joi';
import { getConnection, Repository } from 'typeorm';
import { CompnayRequest } from './dto/company.request.dto';
import { CompanyEntity } from './entity/company.entity';

@Injectable()
export class CompanyService {
    constructor(
    @InjectRepository(CompanyEntity)
    private companyRepository: Repository<CompanyEntity>
){}

async register(compnayRequest: CompnayRequest){
   const company = await this.companyRepository.create({
    position: compnayRequest.position,
    name: compnayRequest.name,
    compensation:  compnayRequest.compensation,
    content: compnayRequest.content,
    skil: compnayRequest.skil,
    region: compnayRequest.region
   })
   return this.companyRepository.save(company)
}

async update(id: number, compnayEntity: CompanyEntity): Promise<void>{
    const exitedComapny = await this.companyRepository.findOne({where: {id}})
    if(exitedComapny){
        await CompanyEntity
            .createQueryBuilder()
            .update(CompanyEntity)
            .set({
                position: compnayEntity.position,
                name: compnayEntity.name,
                compensation: compnayEntity.compensation,
                content: compnayEntity.content,
                skil: compnayEntity.skil,
                region: compnayEntity.region
            })
            .where("id= :id",{id})
            .execute()
    }

}
async deleteCompany(id: number): Promise<void>{
    await this.companyRepository.delete(id)
}

async allCompany(){
    return this.companyRepository.find()
}

}
