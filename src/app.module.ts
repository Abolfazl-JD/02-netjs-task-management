import { Module } from '@nestjs/common';
import { TasksModule } from './task/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'Lvrp1383',
      database: 'task_management',
      autoLoadEntities: true,
    })
  ]
})
export class AppModule {}
