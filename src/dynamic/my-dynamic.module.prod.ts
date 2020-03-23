import { Module } from '@nestjs/common';
import { AbstractRepo } from './models';
import { RealService } from './real/real.service';

@Module({
  exports: [AbstractRepo],
  providers:[{
    provide: AbstractRepo,
    useClass: RealService,
  }]
})
export class MyDynamicModule {}
