import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { Iregistration } from '../types/user';



@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User) {}

    async createUser(obj_user: Iregistration) {
        const user = await this.userRepository.create(obj_user)
        return user
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({attributes: ['email', 'date_born']})
        return users
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}})
        return user
    }
}
