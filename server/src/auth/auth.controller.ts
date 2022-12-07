import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Ilogin, Iregistration } from '../types/user';



@Controller('/auth')
export class AuthController {

    constructor(private authService: AuthService) {}
    
    @Post('/login')
    login(@Body() obj_login: Ilogin) {
        return this.authService.login(obj_login)
    }
    @Post('/registration')
    registration(@Body() obj_registration: Iregistration) {
        return this.authService.registration(obj_registration)
    }
}
