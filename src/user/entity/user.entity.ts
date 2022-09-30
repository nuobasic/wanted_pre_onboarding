
import { IsEnum } from "class-validator";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Role } from "./user.role";

@Entity('user')
export class UserEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    email: string

    @Column()
    password: string

    @IsEnum(Role)
    @Column({default: Role.USER})
    role: Role


}