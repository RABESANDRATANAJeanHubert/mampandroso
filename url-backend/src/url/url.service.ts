import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Url } from './url.entity';
import { generateShortCode } from 'src/helpers/generateShorteCode';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(Url)
    private readonly urlRepository: Repository<Url>,
  ) {}

  async createShortUrl(longUrl: string) {
    const shortCode = generateShortCode(6);
    const url = this.urlRepository.create({ longUrl, shortCode });
    return this.urlRepository.save(url);
  }

  async findByShortCode(code: string): Promise<Url> {
    const url = await this.urlRepository.findOne({ where: { shortCode: code } });
    if (!url) {
      throw new NotFoundException('URL not found');
    }
    return url;
  }
}
