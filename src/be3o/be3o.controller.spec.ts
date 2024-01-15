import { Test, TestingModule } from '@nestjs/testing';
import { Be3oController } from './be3o.controller';

describe('Be3oController', () => {
  let controller: Be3oController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Be3oController],
    }).compile();

    controller = module.get<Be3oController>(Be3oController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
