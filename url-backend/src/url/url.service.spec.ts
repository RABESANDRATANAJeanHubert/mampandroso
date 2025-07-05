import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UrlService } from './url.service';
import { Url } from './url.entity';

describe('UrlService', () => {
  let service: UrlService;
  let repo: Repository<Url>;

  const mockUrlRepository = {
    create: jest.fn(),
    save: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UrlService,
        {
          provide: getRepositoryToken(Url),
          useValue: mockUrlRepository,
        },
      ],
    }).compile();

    service = module.get<UrlService>(UrlService);
    repo = module.get<Repository<Url>>(getRepositoryToken(Url));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

});
