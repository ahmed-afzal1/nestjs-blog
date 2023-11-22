import { Post } from 'src/admin/post/entity/post.entity';
import { User } from 'src/admin/user/entity/user.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Favourite {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Post, (post) => post.favourites)
  post: Post;

  @ManyToOne(() => User, (user) => user.favourites)
  user: User;
}
