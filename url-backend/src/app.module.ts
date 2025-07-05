import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { Url } from './url/url.entity';
import { UrlModule } from './url/url.module';

@Module({
  imports: [
     TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [User, Url],
      synchronize: true,
    }),
    UserModule,
    UrlModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
