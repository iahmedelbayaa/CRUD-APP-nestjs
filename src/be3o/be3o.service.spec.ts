import { Test, TestingModule } from '@nestjs/testing';
import { Be3oService } from './be3o.service';

describe('Be3oService', () => {
  let service: Be3oService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Be3oService],
    }).compile();

    service = module.get<Be3oService>(Be3oService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
