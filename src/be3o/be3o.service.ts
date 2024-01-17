import { Injectable } from '@nestjs/common';
import { Be3o } from './entities/be3o.entites';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Be3oDto } from './dto/be3o.dto/be3o.dto';
import { UpdateBe3oDto } from './dto/update-be3o.dto/update-be3o.dto';
import { Courses } from './entities/courses.entity';

@Injectable()
export class Be3oService {

    constructor(@InjectRepository(Be3o)
    private readonly be3oRepository: Repository<Be3o>,
    @InjectRepository(Courses)
    private readonly coursesRepository: Repository<Courses>
    ) { }


    async findAll() : Promise<Be3o[]>{
        return this.be3oRepository.find({
            relations: ['courses']
        });
    }

    async findOne(id: number): Promise<Be3o> {
        return this.be3oRepository.findOne({
            where: { id: id }
        });
    }
    
    async create(createBe3oDto: Be3oDto) {
        const courses = await Promise.all(
            createBe3oDto.courses.map(name => this.preloadCoursesByName(name))
        );
        const newBe3o = this.be3oRepository.create({
            ...createBe3oDto,
            courses,
        });
        return this.be3oRepository.save(newBe3o);
    }

    async update(id: number, updateStudentDto: UpdateBe3oDto) {
        const courses = await Promise.all(
            updateStudentDto.courses.map(name => this.preloadCoursesByName(name))
        );
        const updateStudent = await this.be3oRepository.preload({
            id: +id,
            ...updateStudentDto,
            courses,
        });
        return this.be3oRepository.save(updateStudent);
    }
    async remove(id: number) {
        await this.be3oRepository.delete(id);

    }

    private async preloadCoursesByName(name: string) {
        const existingCourse = await this.coursesRepository.findOne({ where: { name } });
        if (existingCourse) {
            return existingCourse;
        }
        return this.coursesRepository.create({ name });
    }


}
