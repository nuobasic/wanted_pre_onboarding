import { Role } from "../entity/user.role"

export type JwtPayload={
    email: string
    role: Role
}