import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApplyService } from './apply.service';


@Controller('apply')
@UseGuards(AuthGuard())
export class ApplyController {
    constructor(
        private applyService: ApplyService
    ){}

}
