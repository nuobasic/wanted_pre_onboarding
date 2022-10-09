import { Controller, Post, Body, Put, Param, Delete,Get } from '@nestjs/common';
import { PostingRequest } from './dto/posting.request.dto';
import { PostingEntity } from './entity/posting.entity';
import { PostingService } from './posting.service';

@Controller('posting')
export class PostingController {
    constructor(private postingServece: PostingService){}

    @Post('register')
    async postingRegister(@Body() postingRequest: PostingRequest): Promise<PostingEntity>{
        return await this.postingServece.postingRegister(postingRequest)
    }

    @Put(':id')
    async update(@Param('id')id: number, @Body() postinEntity: PostingEntity): Promise<PostingEntity>{
        await this.postingServece.postingUpdate(id, postinEntity)
        return postinEntity
    }

    @Delete(':id')
    async deletePosting(@Param('id')id:number){
        await this.postingServece.deletePosting(id)
        return '삭제 성공'
        
    }

    @Get()
    async allPosting(){
        return this.postingServece.allPosting()
    }
}
