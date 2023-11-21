import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { PostModule } from 'src/admin/post/post.module';

@Module({
  imports: [PostModule],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
