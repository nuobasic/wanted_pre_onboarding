import { Role } from "../entity/user.role"

export class UserRequest{
    email:string
    password:string
    role:Role
}