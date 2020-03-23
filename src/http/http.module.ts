import {HttpModule as NestHttpModule, Module} from '@nestjs/common';
import { MyDynamicModule } from '../dynamic/my-dynamic.module';
import { AbstractRepo } from '../dynamic/models';

@Module({
  exports: [NestHttpModule],
  imports: [
    NestHttpModule.registerAsync({
      imports: [MyDynamicModule],
      inject: [AbstractRepo],
      useFactory: async (
        repo: AbstractRepo,
      ) => ({
        headers: {
          'x-api-key': await repo.get(),
        },
      }),
    }),
  ],
})
export class HttpModule {}
