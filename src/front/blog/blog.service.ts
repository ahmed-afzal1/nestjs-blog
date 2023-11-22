import { Injectable } from '@nestjs/common';
import { FavouriteService } from 'src/admin/favourite/favourite.service';
import { PostService } from 'src/admin/post/post.service';
import { UserService } from 'src/admin/user/user.service';

@Injectable()
export class BlogService {
  constructor(
    private readonly postService: PostService,
    private readonly userService: UserService,
    private readonly favouriteService: FavouriteService,
  ) {}

  async blogDetails(slug: string) {
    return await this.postService.findBySlug(slug);
  }

  async makeFavourite(favouriteData) {
    const user = await this.userService.getUserById(favouriteData.userId);
    const post = await this.postService.findById(favouriteData.post_id);
    return await this.favouriteService.makeFavourite({ user, post });
  }
}
