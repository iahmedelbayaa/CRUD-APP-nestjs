import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Be3o {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    age: number;
    @Column('json',{nullable:true})
    address: string;
}