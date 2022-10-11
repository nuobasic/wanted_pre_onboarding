
import { IsEnum } from "class-validator";
import { CompanyEntity } from "../../company/entity/company.entity";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Role } from "./user.role";
import { ApplyEntity } from "../../apply/entity/apply.entity";

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

    @OneToMany(()=> CompanyEntity, (company) =>company.user, {eager: true})
    companys: CompanyEntity[]

    @OneToMany(()=> ApplyEntity, (apply)=>apply.user)
    apply: ApplyEntity


}