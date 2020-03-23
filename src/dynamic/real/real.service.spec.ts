import { Test, TestingModule } from '@nestjs/testing';
import { RealService } from './real.service';

describe('RealService', () => {
  let service: RealService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RealService],
    }).compile();

    service = module.get<RealService>(RealService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
