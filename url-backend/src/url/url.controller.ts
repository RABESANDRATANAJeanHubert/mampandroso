import { Controller, Post, Body, Get, Param, Res, NotFoundException } from '@nestjs/common';
import { UrlService } from './url.service';
import { Response } from 'express';
import { CreateUrlDto } from './dtos/createUrlDto';

@Controller('api/url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post()
  async createShortUrl(@Body() createUrlDto: CreateUrlDto) {
    return this.urlService.createShortUrl(createUrlDto.longUrl);
  }

  @Get(':shortCode')
  async redirect(@Param('shortCode') code: string, @Res() res: Response) {
    const url = await this.urlService.findByShortCode(code);
    if (!url) {
      throw new NotFoundException('URL not found');
    }
    return res.redirect(url.longUrl);
  }
}
