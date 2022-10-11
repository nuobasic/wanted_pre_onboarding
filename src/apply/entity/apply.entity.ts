import { UserEntity } from "../../user/entity/user.entity";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { PostingEntity } from "../../posting/entity/posting.entity";

@Entity('apply')
export class ApplyEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(()=> UserEntity, (user)=> user.apply)
    user: UserEntity

    @ManyToOne(()=> PostingEntity, (posting)=>posting.apply)
    posting:PostingEntity
}