import { Body, Controller , Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { Be3oService } from './be3o.service';
import { Be3oDto } from './dto/be3o.dto/be3o.dto';

@Controller('be3o')
export class Be3oController {
    //call service to controller 
    constructor( private readonly be3oService : Be3oService){}
    @Get()
    helloBe3o() {
        return "Hello Be3o"
    }
    @Get()
    getAll(@Res() res) {
        return this.be3oService.findAll()
    }
    @Post()
    postBe3o(@Body() hello:Be3oDto) {
        return this.be3oService.create(hello)
    }
    @Get(':id')
    getBe3o(@Param('id') id: number) {
        return this.be3oService.findOne(id);
    }
    //specific return Post
    @Post()
    //@HttpCode(HttpStatus.GONE)
    postBe3oO(@Body("name") body) {
        return body;
    }
    //put
    @Put(':id')
    putBe3o(@Param('id') id: number, @Body() body:Be3oDto) {
        return this.be3oService.update(id, body);
    }
    //delete
    @Delete(':id')
    deleteBe3o(@Param('id') id: number) {
        return this.be3oService.remove(id);
    }
}
