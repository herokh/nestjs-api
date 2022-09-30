import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AlbumsModule } from './albums/albums.module';
import { configuration } from './config';
import { typeOrmConfiguration } from './config/type-orm.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    LoggerModule.forRoot(),
    TypeOrmModule.forRootAsync({ useFactory: typeOrmConfiguration }),
    AlbumsModule,
  ],
})
export class AppModule {}
