import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';
import { UserRequest } from './dto/user.request.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ){}

    async signup (userRequest: UserRequest) {
        const {email, password, role} = userRequest

        const findUser = await this.userRepository.findOne({where: {email}})

        if(findUser){
            throw new UnauthorizedException('이미 존재하는 email입니다')
            
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await this.userRepository.create({
            email,
            password: hashedPassword,
            role
        })
        const result = await this.userRepository.save(user)

        return result
    }

    async logIn(userRequest: UserRequest){
        const{email, password, role} = userRequest

        const user = await this.userRepository.findOne({where: {email}})

        if(user && (await bcrypt.compare(password, user.password))){
            return 'login success'
        }
        else{
            throw new UnauthorizedException('login failed')
        }

    }
}
