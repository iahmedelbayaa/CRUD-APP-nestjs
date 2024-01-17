import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/authentication.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    
    @Post()
    login(@Res() Res, @Body() authenticationDto: AuthDto) {
        try {
            const response = this.authService.authenticate(authenticationDto);
            return Res.status(200).json(response);
        } catch (error) {
            return Res.status(404).json(error.message);
        }
    }

}
