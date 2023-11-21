import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { Tag } from './entity/tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
    private readonly entityManager: EntityManager,
  ) {}

  async all() {
    return this.tagRepository.find();
  }

  async store(createTagDto: CreateTagDto) {
    const tag = new Tag();
    tag.title = createTagDto.title;
    tag.slug = createTagDto.slug;

    return await this.entityManager.save(tag);
  }

  async find(id: string) {
    return await this.tagRepository.findOneBy({ id: Number(id) });
  }

  async update(id: string, updateTagDto: UpdateTagDto) {
    const tag = await this.tagRepository.findOneBy({ id: Number(id) });

    tag.title = updateTagDto.title ?? tag.title;
    tag.slug = updateTagDto.slug ?? tag.slug;
    tag.status = updateTagDto.status ?? tag.status;

    return this.tagRepository.save(tag);
  }

  async destroy(id: string) {
    const tag = await this.tagRepository.findOneBy({ id: Number(id) });
    return await this.tagRepository.remove(tag);
  }
}
