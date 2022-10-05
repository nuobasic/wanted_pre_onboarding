import { PostingEntity } from "../../posting/entity/posting.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(()=> PostingEntity, (posting) =>posting.company)
    postings: PostingEntity[]
}