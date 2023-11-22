import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { PostModule } from 'src/admin/post/post.module';
import { FavouriteModule } from 'src/admin/favourite/favourite.module';
import { UserModule } from 'src/admin/user/user.module';

@Module({
  imports: [PostModule, FavouriteModule, UserModule],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
