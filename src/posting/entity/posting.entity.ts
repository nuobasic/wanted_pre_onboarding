import { CompanyEntity } from "../../company/entity/company.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApplyEntity } from "../../apply/entity/apply.entity";

@Entity('posting')
export class PostingEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    position: string

    @Column()
    compensation: number

    @Column()
    skil: string

    @Column()
    content: string

    @ManyToOne(()=> CompanyEntity, (company)=>company.postings)
    @JoinColumn()
    company: CompanyEntity

    @ManyToOne(()=>ApplyEntity, (apply)=>apply.posting)
    apply:ApplyEntity

    @Column()
    postingCount: number
}