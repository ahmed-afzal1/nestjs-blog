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
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';

@ApiTags('tag')
@UseGuards(JwtAuthGuard)
@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get('index')
  async index() {
    return this.tagService.all();
  }

  @Post('store')
  async create(@Body() createTagDto: CreateTagDto) {
    return await this.tagService.store(createTagDto);
  }

  @Get('edit/:id')
  async edit(@Param('id') id: string) {
    return await this.tagService.find(id);
  }

  @Put('update/:id')
  async update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
    return await this.tagService.update(id, updateTagDto);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return await this.tagService.destroy(id);
  }
}
