import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Be3o } from "./be3o.entites";

@Entity()
export class Courses { 
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;

    // @JoinTable()
    @ManyToMany(type => Be3o, be3os => be3os.courses, { cascade: true })
    be3os: Be3o[];
}
