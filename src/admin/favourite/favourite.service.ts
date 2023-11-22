import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { Favourite } from './entity/favourite.entity';
import { CreateFavouriteDto } from './dto/create-favourite.dto';
import { UserService } from '../user/user.service';
import { PostService } from '../post/post.service';

@Injectable()
export class FavouriteService {
  constructor(
    @InjectRepository(Favourite)
    private readonly favouriteRepository: Repository<Favourite>,
    private readonly entityManager: EntityManager,
    private readonly userService: UserService,
    private readonly postService: PostService,
  ) {}

  async all() {
    const favouritePosts = await this.favouriteRepository
      .createQueryBuilder('favourite')
      .leftJoinAndSelect('favourite.post', 'post')
      .leftJoinAndSelect('favourite.user', 'user')
      .getMany();

    return favouritePosts;
  }

  async makeFavourite(createFavouriteData: CreateFavouriteDto) {
    const favourite = new Favourite();
    favourite.post = createFavouriteData.post;
    favourite.user = createFavouriteData.user;

    return await this.entityManager.save(favourite);
  }
}
