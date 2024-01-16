import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Be3oController } from './be3o/be3o.controller';
import { Be3oService } from './be3o/be3o.service';

@Module({
  imports: [],
  controllers: [AppController, Be3oController],
  providers: [AppService, Be3oService],
})
export class AppModule {}
