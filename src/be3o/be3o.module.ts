import { Module } from '@nestjs/common';
import { Be3oController } from './be3o.controller';
import { Be3oService } from './be3o.service';

@Module({
    controllers: [ Be3oController],
  providers: [ Be3oService],
})
export class Be3oModule {}
