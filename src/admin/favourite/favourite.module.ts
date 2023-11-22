import { Module } from '@nestjs/common';
import { FavouriteController } from './favourite.controller';
import { FavouriteService } from './favourite.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favourite } from './entity/favourite.entity';
import { UserModule } from '../user/user.module';
import { PostModule } from '../post/post.module';

@Module({
  imports: [UserModule, PostModule, TypeOrmModule.forFeature([Favourite])],
  exports: [FavouriteService],
  controllers: [FavouriteController],
  providers: [FavouriteService],
})
export class FavouriteModule {}
