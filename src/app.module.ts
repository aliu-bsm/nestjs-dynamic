import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyDynamicModule } from './dynamic/my-dynamic.module';
import { HttpModule } from './http/http.module';

@Module({
  imports: [MyDynamicModule.init(), HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
