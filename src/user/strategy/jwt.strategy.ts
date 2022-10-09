import { Injectable, UnauthorizedException } from "@nestjs/common"; 
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserEntity } from "../entity/user.entity";
import { Repository } from 'typeorm';
import { JwtPayload } from "./jwtPayload";


 @Injectable()
 export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectRepository(UserEntity)
        private userRepositoyr: Repository<UserEntity>
    ){
        super({
            secretOrKey: 'secret', // token 이 유효한지 체크, token 생성할때 사용한 것과 같아야함
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()


        })
    }

    async validate(payload: JwtPayload){
        const {email, role} = payload

        const user:UserEntity = await this.userRepositoyr.findOne({where: {email, role}})

        if(!user){
            throw new UnauthorizedException()
        }

        return user
    }
 }