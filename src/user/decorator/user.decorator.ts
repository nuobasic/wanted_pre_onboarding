import { createParamDecorator, ExecutionContext , SetMetadata} from "@nestjs/common";
import { UserEntity } from "../entity/user.entity";
import { Role } from "../entity/user.role";
import { JwtPayload } from "../strategy/jwtPayload";


export const GetUser = createParamDecorator((data, ctx:ExecutionContext): UserEntity=>{
    const req = ctx.switchToHttp().getRequest()
    return req.user
})

export const Roles=(...roles: Role[]) => SetMetadata('roles', roles)

export const GetUserCeo = createParamDecorator((data, ctx:ExecutionContext): Role.CEO=>{
    const req = ctx.switchToHttp().getRequest()
    const user = req.user as JwtPayload
    return  Role.CEO
})

    
