import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';
import { UserRequest } from './dto/user.request.dto';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt/dist';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
        private jwtService: JwtService
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
            //유저 토큰 생성( Secreat + Paylod)
            const payload= {email, role} //payload 에는 중요 정보x 
            const accessToken = await this.jwtService.sign(payload)


            return {accessToken}
        }
        else{
            throw new UnauthorizedException('login failed')
        }

    }
}
