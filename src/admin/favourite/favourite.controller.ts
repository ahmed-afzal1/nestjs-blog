import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { FavouriteService } from './favourite.service';

@ApiTags('Admin Favourite Post')
@UseGuards(JwtAuthGuard)
@Controller('favourite')
export class FavouriteController {
  constructor(private readonly favouriteService: FavouriteService) {}

  @Get('index')
  async index() {
    return await this.favouriteService.all();
  }
}
