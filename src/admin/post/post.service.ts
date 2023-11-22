import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { Post } from './entity/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryService } from '../category/category.service';
import { TagService } from '../tag/tag.service';
import { UserService } from '../user/user.service';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    private readonly entityManager: EntityManager,
    private readonly categoryService: CategoryService,
    private readonly tagService: TagService,
    private readonly userService: UserService,
  ) {}

  async all() {
    // return await this.postRepository.find({
    //   relations: {
    //     user: true,
    //     category: true,
    //     tag: true,
    //   },
    // });

    const posts = await this.postRepository
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.user', 'user')
      .leftJoinAndSelect('post.comments', 'comments')
      .select([
        'post.id',
        'post.title',
        'post.slug',
        'post.photo',
        'post.created_at',
        'post.updated_at',
      ])
      .getMany();

    return posts;
  }

  async store(createPostDto) {
    const category = await this.categoryService.find(createPostDto.category_id);
    const tag = await this.tagService.find(createPostDto.tag_id);
    const user = await this.userService.getUserById(createPostDto.userId);

    const post = new Post();
    post.title = createPostDto.title;
    post.slug = createPostDto.slug;
    post.photo = createPostDto.photo;
    post.category = category;
    post.tag = tag;
    post.user = user;

    return this.entityManager.save(post);
  }

  async findById(id: number) {
    return this.postRepository.findOne({
      relations: { user: true, category: true, tag: true, comments: true },
      where: { id },
    });
  }

  async findBySlug(slug: string) {
    return await this.postRepository.findOne({
      relations: { user: true, category: true, tag: true, comments: true },
      where: { slug },
    });
  }
}
