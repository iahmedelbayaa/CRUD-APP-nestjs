import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import {Courses} from './courses.entity'

@Entity()
export class Be3o {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    age: number;
    @Column('json',{nullable:true})
    address: string[];

    @JoinTable()
    @ManyToMany(type => Courses, courses => courses.be3os, { cascade: true })
    
    courses: Courses[];
}