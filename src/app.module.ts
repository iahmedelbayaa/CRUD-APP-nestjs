import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Be3oController } from './be3o/be3o.controller';

@Module({
  imports: [],
  controllers: [AppController, Be3oController],
  providers: [AppService],
})
export class AppModule {}
