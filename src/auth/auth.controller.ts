import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/authentication.dto';
import { JwtAuthGuard } from './jwt.guard';

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

    @UseGuards(JwtAuthGuard)
    @Get()
    profile(@Req() req, @Res() res) {
        return res.status(200).json(req.user);
    }

}
