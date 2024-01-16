import { Injectable } from '@nestjs/common';
import { Be3o, Student } from './entities/be3o.entites';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Be3oDto } from './dto/be3o.dto/be3o.dto';
import { UpdateBe3oDto } from './dto/update-be3o.dto/update-be3o.dto';

@Injectable()
export class Be3oService {

    constructor(@InjectRepository(Be3o)
    private readonly be3oRepository : Repository<Be3o>
    ) { }
    // private student: Student[] = [
    //     {
    //         id: 1,
    //         name: "ahmed",
    //         age: 22,
    //         address: ["cairo", "giza"]
    //     },
    //     {
    //         id: 2,
    //         name: "mohamed",
    //         age: 23,
    //         address: ["cairo", "giza"]
    //     },
    //     {
    //         id: 3,
    //         name: "ali",
    //         age: 24,
    //         address: ["cairo", "giza"]
    //     }
    // ]

    async findAll() : Promise<Be3o[]>{
        return this.be3oRepository.find();
    }

    async findOne(id: number): Promise<Be3o> {
        return this.be3oRepository.findOne({
            where: { id: id }
        });
    }
    
    async create(createBe3oDto: Be3oDto) {
        const newBe3o = this.be3oRepository.create(createBe3oDto);
        return this.be3oRepository.save(newBe3o);
    }

    async update(id: number, updateStudentDto: UpdateBe3oDto) {
        const updateStudent = await this.be3oRepository.preload({
            id: id,
            ...updateStudentDto
        });
        return this.be3oRepository.save(updateStudent);
    }
    async remove(id: string) {
        await this.be3oRepository.delete(id);

    }



}
