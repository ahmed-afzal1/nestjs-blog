import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category';

@ApiTags('categories')
@UseGuards(JwtAuthGuard)
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('index')
  async index() {
    return await this.categoryService.all();
  }

  @Post('store')
  async create(@Body() input: CreateCategoryDto) {
    return await this.categoryService.store(input);
  }

  @Get('edit/:id')
  async edit(@Param('id') id: string) {
    return await this.categoryService.find(id);
  }

  @Put('update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return await this.categoryService.update(id, updateCategoryDto);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return this.categoryService.destroy(id);
  }
}
