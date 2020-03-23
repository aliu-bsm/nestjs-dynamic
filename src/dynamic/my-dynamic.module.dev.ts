import { Module } from '@nestjs/common';
import { AbstractRepo } from './models';
import { MockService } from './mock/mock.service';

@Module({
  exports: [AbstractRepo],
  providers:[{
    provide: AbstractRepo,
    useClass: MockService,
  }]
})
export class MyDynamicModule {}
