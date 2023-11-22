import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/admin/auth/guard/jwt-auth.guard';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentService } from './comment.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Post Comment')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @UseGuards(JwtAuthGuard)
  @Post('submit')
  async comments(@Req() req: any, @Body() createCommentDto: CreateCommentDto) {
    const commentData = {
      ...createCommentDto,
      user_id: req.user.userId,
    };

    return this.commentService.create(commentData);
  }
}
