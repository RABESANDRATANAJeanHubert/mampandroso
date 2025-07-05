import { Body, ClassSerializerInterceptor, Controller, Get, Post, Redirect, UseInterceptors } from '@nestjs/common';
import { SignUpDto } from './dtos/signupDto';
import { UserService } from './user.service';
import { LoginDto } from './dtos/loginDto';

@Controller('user')
export class UserController {
   constructor(private readonly userService: UserService){}
   @Get("/signin")
    getSignIn() {
        return "Page inscription"
    }

    @Post("/signup")
    @Redirect("/user/login")
    async postSignUp (@Body() body: SignUpDto){
        return  { message: await this.userService.userSignUp(body)};
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Post('/login')
    async postLogin(@Body() body: LoginDto ) {
        return { message: await this.userService.userLogin(body) }
    }
}
