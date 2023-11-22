import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './admin/auth/auth.module';
import { PostModule } from './admin/post/post.module';
import { UserModule } from './admin/user/user.module';
import { CategoryModule } from './admin/category/category.module';
import { TagModule } from './admin/tag/tag.module';
import { MulterModule } from '@nestjs/platform-express';
import { BlogModule } from './front/blog/blog.module';
import { HomeModule } from './front/home/home.module';
import { CommentModule } from './front/comment/comment.module';
import { FavouriteModule } from './admin/favourite/favourite.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MulterModule.register({ dest: './uploads' }),
    DatabaseModule,
    AuthModule,
    PostModule,
    UserModule,
    CategoryModule,
    TagModule,
    BlogModule,
    HomeModule,
    CommentModule,
    FavouriteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
