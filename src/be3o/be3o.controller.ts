import { Controller , Get } from '@nestjs/common';

@Controller('be3o')
export class Be3oController {
    @Get()
    helloBe3o() {
        return "Hello Be3o"
    }
}
