import { IsNotEmpty } from 'class-validator';
import { Post } from 'src/admin/post/entity/post.entity';
import { User } from 'src/admin/user/entity/user.entity';

export class CreateCommentDto {
  @IsNotEmpty()
  comment: string;

  user: User;

  post: Post;
}
