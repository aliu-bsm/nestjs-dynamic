import { Injectable } from '@nestjs/common';
import { AbstractRepo } from '../models';

@Injectable()
export class MockService implements AbstractRepo{
  get() {
    return 'mock';
  }
}
