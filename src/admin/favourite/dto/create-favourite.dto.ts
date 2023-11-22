import { Post } from 'src/admin/post/entity/post.entity';
import { User } from 'src/admin/user/entity/user.entity';

export class CreateFavouriteDto {
  user: User;

  post: Post;
}
