import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Be3oModule } from './be3o/be3o.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [Be3oModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'be3o',
      autoLoadEntities:true,
      synchronize: true,  //in dev mode true in publish false
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
