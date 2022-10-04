import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('company')
export class CompanyEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    name: string

    @Column()
    position: string

    @Column()
    compensation: number

    @Column()
    content: string

    @Column()
    skil: string

    @Column()
    region: string

}