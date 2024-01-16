import { Module } from '@nestjs/common';
import { Be3oController } from './be3o.controller';
import { Be3oService } from './be3o.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Be3o } from './entities/be3o.entites';

@Module({
  imports:[TypeOrmModule.forFeature([Be3o])],
  controllers: [ Be3oController],
  providers: [ Be3oService],
})
export class Be3oModule {}
