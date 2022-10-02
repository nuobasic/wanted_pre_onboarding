import { Body, Controller, Post } from '@nestjs/common';
import { UserRequest } from './dto/user.request.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ){}

    @Post('signup')
    async signup(@Body() userrequest: UserRequest) {
        return await this.userService.signup(userrequest)
    }
}
