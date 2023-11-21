import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HomeService } from './home.service';

@ApiTags('home')
@Controller('/')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('categories')
  async categories() {
    return await this.homeService.categories();
  }

  @Get('tags')
  async tags() {
    return await this.homeService.tags();
  }

  @Get('posts')
  async posts() {
    return await this.homeService.posts();
  }
}
