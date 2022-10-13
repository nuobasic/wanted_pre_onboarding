import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { UserEntity } from "../entity/user.entity";
import { Role } from "../entity/user.role";



@Injectable()
export class RolesGuard implements CanActivate{
    constructor(private readonly reflector: Reflector){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const roles = this.reflector.getAllAndOverride<Role[]>('roles', [context.getHandler(), context.getClass()])

        if(!roles){
            return true
        }
     const {user} = context.switchToHttp().getRequest()
     return roles.some((role)=>user.roles?.includes(role))

    }

}