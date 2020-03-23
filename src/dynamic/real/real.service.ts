import { Injectable } from '@nestjs/common';
import { AbstractRepo } from '../models';

@Injectable()
export class RealService implements AbstractRepo {
  get() {
    return 'real'
  }
}
