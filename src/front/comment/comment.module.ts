import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entity/comment.entity';
import { CommentController } from './comment.controller';
import { PostModule } from 'src/admin/post/post.module';
import { UserModule } from 'src/admin/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Comment]), PostModule, UserModule],
  exports: [CommentService],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
