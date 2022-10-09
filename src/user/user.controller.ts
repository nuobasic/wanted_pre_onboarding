import { Body, Controller, Post ,Req, UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser, Roles } from './decorator/user.decorator';
import { UserRequest } from './dto/user.request.dto';
import { UserEntity } from './entity/user.entity';
import { Role } from './entity/user.role';
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

    @Post('login')
    async logIn(@Body() userRequest: UserRequest) {
        return await this.userService.logIn(userRequest)
    }

    @Post('test')
    @UseGuards(AuthGuard())
    test(@GetUser() user: UserEntity){
        console.log('user', user)
    }
}
