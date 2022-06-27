import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { User } from './modules/user/user.entity';
import { UserController } from './modules/user/user.controller';
import { UserModule } from './modules/user/user.module';
import { UserService } from './modules/user/user.service';

import { EventModule } from './modules/event/event.module';
import { EventController } from './modules/event/event.controller';
import { EventService } from './modules/event/event.service';
import { ConfigModule } from '@nestjs/config';
import { Event } from './modules/event/event.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    EventModule,
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [User, Event],
      synchronize: true,
    } as TypeOrmModuleOptions),
  ],
  exports: [TypeOrmModule],
  controllers: [UserController, EventController],
  providers: [UserService, EventService],
})
export class AppModule {}