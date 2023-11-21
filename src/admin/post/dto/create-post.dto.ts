import { IsNotEmpty, IsString } from 'class-validator';
import { Category } from 'src/admin/category/entity/category.entity';
import { Tag } from 'src/admin/tag/entity/tag.entity';
import { User } from 'src/admin/user/entity/user.entity';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  slug: string;

  photo: any;

  category: Category;

  user: User;

  tag: Tag;
}
