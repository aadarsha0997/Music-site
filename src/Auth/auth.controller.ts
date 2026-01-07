import { Controller, Post ,Get} from "@nestjs/common";
import { AuthService } from "./auth.service";
// 3205010

@Controller("auth")
export class AuthController{
    constructor( private authService:AuthService){}

    @Post()
    signup(){
        return this.authService.signup();
    }
    @Post()
    login(){
        return this.authService.login();

    }
    @Get()
    temp(){
        return this.authService.login()
    }
    
}