import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApplyService } from './apply.service';
import { ApplyRequest } from './dto/apply.request.dto';
import { ApplyEntity } from './entity/apply.entity';


@Controller('apply')
export class ApplyController {
    constructor(
        private applyService: ApplyService
    ){}

    @Post('enrol')
    async applyEnrol(@Body() applyRequest: ApplyRequest): Promise<ApplyEntity>{
        return await this.applyService.applyPosting(applyRequest)
    }

}
