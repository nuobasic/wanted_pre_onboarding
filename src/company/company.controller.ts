import { Body, Controller, Param, Post, Put, Delete, Get } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompnayRequest } from './dto/company.request.dto';
import { CompanyEntity } from './entity/company.entity';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService){}

    @Post('register')
    async register(@Body() companyRequest: CompnayRequest){
        return await this.companyService.register(companyRequest)
    }

    @Put(':id')
    async update(@Param('id')id: number, @Body() companyEntity: CompanyEntity){
        await this.companyService.update(id, companyEntity)
        return '변경 성공 '
    }
    
    @Delete(':id')
    async deleteCompany(@Param('id')id: number){
        await this.companyService.deleteCompany(id)
        return '삭제 성공'
    }

    @Get()
    async findAll(){
        return this.companyService.allCompany()
    }
}