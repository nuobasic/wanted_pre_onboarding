import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}