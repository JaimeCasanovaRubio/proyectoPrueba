import { Test, TestingModule } from '@nestjs/testing';
import { HolaResolver } from './hola.resolver';

describe('HolaResolver', () => {
  let resolver: HolaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HolaResolver],
    }).compile();

    resolver = module.get<HolaResolver>(HolaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
