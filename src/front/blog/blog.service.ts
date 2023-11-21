import { Injectable } from '@nestjs/common';
import { PostService } from 'src/admin/post/post.service';

@Injectable()
export class BlogService {
  constructor(private readonly postService: PostService) {}

  async blogDetails(slug: string) {
    return await this.postService.findBySlug(slug);
  }
}
