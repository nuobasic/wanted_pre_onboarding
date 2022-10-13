import { Injectable ,UnauthorizedException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { cp } from 'fs';
import { number } from 'joi';
import { UserEntity } from 'src/user/entity/user.entity';
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
    country: compnayRequest.country,
    name: compnayRequest.name,
    region: compnayRequest.region,
    
    
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
                country: compnayEntity.country,
                name: compnayEntity.name,
                region: compnayEntity.region,
                
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

async findCompany(id: number){
    const company =  await this.companyRepository.findOne({where: {id}})

    if(!company){
        throw new NotFoundException(`Company (id: ${id}) was not found.`);
    }

    return company
}

}
