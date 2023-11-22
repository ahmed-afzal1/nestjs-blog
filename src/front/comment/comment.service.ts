import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { Comment } from './entity/comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PostService } from 'src/admin/post/post.service';
import { UserService } from 'src/admin/user/user.service';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    private readonly entityManager: EntityManager,
    private readonly postService: PostService,
    private readonly userService: UserService,
  ) {}

  async create(createCommentDto) {
    const user = await this.userService.getUserById(createCommentDto.user_id);
    const post = await this.postService.findById(createCommentDto.post_id);

    const comment = new Comment();
    comment.comment = createCommentDto.comment;
    comment.user = user;
    comment.post = post;

    return await this.entityManager.save(comment);
  }
}
