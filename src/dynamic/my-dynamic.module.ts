import { DynamicModule, Module } from '@nestjs/common';

@Module({})
export class MyDynamicModule {
  static init(): DynamicModule {
    const myModule =
      process.env.NODE_ENV === 'production'
        ? require('./my-dynamic.module.prod')
        : require('./my-dynamic.module.dev');
    const imports = [myModule.MyDynamicModule]

    return {
      exports: imports,
      imports,
      module: MyDynamicModule,
    };
  }
}
