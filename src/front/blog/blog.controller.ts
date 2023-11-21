import { Controller, Get, Param } from '@nestjs/common';
import { BlogService } from './blog.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('blogs')
@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get(':slug')
  async blogDetails(@Param('slug') slug: string) {
    return await this.blogService.blogDetails(slug);
  }
}
