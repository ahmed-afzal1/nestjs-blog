import { Injectable } from '@nestjs/common';
import { CategoryService } from 'src/admin/category/category.service';
import { PostService } from 'src/admin/post/post.service';
import { TagService } from 'src/admin/tag/tag.service';

@Injectable()
export class HomeService {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly tagService: TagService,
    private readonly postService: PostService,
  ) {}

  async categories() {
    return await this.categoryService.all();
  }

  async tags() {
    return await this.tagService.all();
  }

  async posts() {
    return await this.postService.all();
  }
}
