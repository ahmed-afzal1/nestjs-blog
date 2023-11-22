import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BlogService } from './blog.service';
import { JwtAuthGuard } from 'src/admin/auth/guard/jwt-auth.guard';
import { CreateFavouriteDto } from 'src/admin/favourite/dto/create-favourite.dto';

@ApiTags('blogs')
@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get(':slug')
  async blogDetails(@Param('slug') slug: string) {
    return await this.blogService.blogDetails(slug);
  }

  @UseGuards(JwtAuthGuard)
  @Post('favourite')
  async favouritePost(
    @Req() req: any,
    @Body() createfavouriteDto: CreateFavouriteDto,
  ) {
    const userId = req.user.userId;
    const favouriteData = {
      ...createfavouriteDto,
      userId,
    };

    return await this.blogService.makeFavourite(favouriteData);
  }
}
