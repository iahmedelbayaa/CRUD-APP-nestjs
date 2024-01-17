import { Injectable, NotFoundException } from '@nestjs/common';
import {faker} from '@faker-js/faker'
import { IAuthenticate, Role } from './interface/Role';
import { AuthDto } from './dto/authentication.dto';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
    users = [
        {
            userId: faker.datatype.uuid(),
            username: 'john',
            email: 'be3o@gmail.com',
            password: 'hello',
            role: Role.Admin,
        },
            {
            userId: faker.datatype.uuid(),
            username: 'ali',
            email: 'ali@gmail.com',
            password: 'hello',
            role: Role.User,
        },
    ];

    authenticate(authDto: AuthDto): IAuthenticate{
        const user = this.users.find(
            (u) => 
                u.username === authDto.username &&
                u.password === authDto.password
        )
        if (!user) throw new NotFoundException('invalid')
        const token = sign({ ...user }, 'secrete')
        return {user, token }
    }
    
}
