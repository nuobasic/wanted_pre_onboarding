import { PostingEntity } from "../../posting/entity/posting.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { UserEntity } from "../../user/entity/user.entity";

@Entity('company')
export class CompanyEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    country: string

    @Column()
    region: string

    @ManyToOne(()=> UserEntity, (user)=> user.companys, {eager: false})
    user: UserEntity

    @OneToMany(()=> PostingEntity, (posting) =>posting.company)
    postings: PostingEntity[]
}