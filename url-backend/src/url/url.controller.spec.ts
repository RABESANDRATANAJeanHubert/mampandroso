import { Test, TestingModule } from '@nestjs/testing';
import { UrlController } from './url.controller';
import { UrlService } from './url.service';
import { NotFoundException } from '@nestjs/common';

describe('UrlController', () => {
  let controller: UrlController;
  let service: UrlService;

  const mockUrlService = {
    createShortUrl: jest.fn(),
    findByShortCode: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrlController],
      providers: [
        {
          provide: UrlService,
          useValue: mockUrlService,
        },
      ],
    }).compile();

    controller = module.get<UrlController>(UrlController);
    service = module.get<UrlService>(UrlService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createShortUrl', () => {
    it('should create and return a short URL', async () => {
      const longUrl = 'https://example.com/long-url';
      const savedUrl = { id: 1, longUrl, shortCode: 'abc123' };

      mockUrlService.createShortUrl.mockResolvedValue(savedUrl);

      const result = await controller.createShortUrl({ longUrl });
      expect(result).toEqual(savedUrl);
      expect(mockUrlService.createShortUrl).toHaveBeenCalledWith(longUrl);
    });
  });
});
