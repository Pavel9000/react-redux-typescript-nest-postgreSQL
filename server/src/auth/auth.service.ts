import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'
import { User } from 'src/users/users.model';
import { Ilogin, Iregistration } from '../types/user';


@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
                private jwtService: JwtService) {}

    async login(obj_user: Ilogin) {
        const user = await this.validateUser(obj_user)
        return this.generateToken(user)
    }
    async registration(obj_user: Iregistration) {
        const candidate = await this.userService.getUserByEmail(obj_user.email)
        if (candidate) {
            throw new HttpException('Пользаватель с таким email cyществует', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(obj_user.password, 5)
        const user = await this.userService.createUser({...obj_user, password: hashPassword})
        return this.generateToken(user)
    }
    async generateToken(user: User) {
        const payload = {email: user.email, id: user.id}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(obj_user: Ilogin) {
        const user = await this.userService.getUserByEmail(obj_user.email)
        const passwordEquals = await bcrypt.compare(obj_user.password, user.password)
        if (user && passwordEquals) {
            return user
        }
        throw new UnauthorizedException({message: 'Некорректный емайл или пароль'})
    }
}