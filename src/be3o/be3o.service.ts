import { Injectable } from '@nestjs/common';
import { Student } from './entities/student.entites';

@Injectable()
export class Be3oService {
    private student: Student[] = [
        {
            id: 1,
            name: "ahmed",
            age: 22,
            address: ["cairo", "giza"]
        },
        {
            id: 2,
            name: "mohamed",
            age: 23,
            address: ["cairo", "giza"]
        },
        {
            id: 3,
            name: "ali",
            age: 24,
            address: ["cairo", "giza"]
        }
    ]

    async findAll() {
        return this.student;
    }

    async findOne(id: number) {
        return this.student.find(student => student.id === id);
    }
    
    async create(createStudentDto : any) {
         this.student.push(createStudentDto)
    }

    async update(id: number, updateStudentDto: any) {
        const updateStudent = this.findOne(id);
        if (updateStudent) {
            //updateStudent.name = updateStudentDto.name;
            //updateStudent.age = updateStudentDto.age;
            //updateStudent.address = updateStudentDto.address;
            //return updateStudent;
            const index = this.student.findIndex(student => student.id === id);
            this.student[index] = updateStudentDto;
            return this.student[index];
        }
    }
    remove(id: string) {
        const deleteStudent = this.student.findIndex(x => x.id === +id);
        if (deleteStudent >= 0) {
            this.student.splice(deleteStudent, 1);
            return true;
        }
    
    }

    

}
