import { Module } from '@nestjs/common';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';
import { CategoryModule } from 'src/admin/category/category.module';
import { TagModule } from 'src/admin/tag/tag.module';
import { PostModule } from 'src/admin/post/post.module';

@Module({
  controllers: [HomeController],
  providers: [HomeService],
  imports: [CategoryModule, TagModule, PostModule],
})
export class HomeModule {}
