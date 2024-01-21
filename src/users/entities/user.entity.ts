import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    UserName: string;

    @Column()
    UserUUID: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({nullable:true})
    role: string;
}