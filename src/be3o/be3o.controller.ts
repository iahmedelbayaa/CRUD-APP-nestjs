import { Body, Controller , Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { Be3oService } from './be3o.service';

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
        return res.status(200).send("hello be3o 2")
    }
    @Post()
    postBe3o(@Body() hello) {
        return hello;
    }
    @Get(':id')
    getBe3o(@Param('id') id: number) {
        return `Hello Be3o ${id}`
    }
    //specific return Post
    @Post()
    //@HttpCode(HttpStatus.GONE)
    postBe3oO(@Body("name") body) {
        return body;
    }
    //put
    @Put(':id')
    putBe3o(@Param('id') id: number, @Body() body) {
        return `Hello Be3o ${id} ${JSON.stringify(body)}`
    }
    //delete
    @Delete(':id')
    deleteBe3o(@Param('id') id: number) {
        return `Delete Be3o ${id}`
    }
}
