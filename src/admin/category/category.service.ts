import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entity/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    private readonly entityManager: EntityManager,
  ) {}

  async all() {
    return await this.categoryRepository.find();
  }

  async store(createCategoryDto: CreateCategoryDto) {
    const category = new Category();
    category.title = createCategoryDto.title;
    category.slug = createCategoryDto.slug;
    category.status = createCategoryDto.status;

    return this.entityManager.save(category);
  }

  async find(id: string) {
    return await this.categoryRepository.findOneBy({ id: Number(id) });
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryRepository.findOneBy({
      id: Number(id),
    });

    category.title = updateCategoryDto.title ?? category.title;
    category.slug = updateCategoryDto.slug ?? category.slug;
    category.status = updateCategoryDto.status ?? category.status;

    return this.entityManager.save(category);
  }

  async destroy(id: string) {
    const category = await this.categoryRepository.findOneBy({
      id: Number(id),
    });
    await this.categoryRepository.remove(category);

    return 'Data has deleted successfully';
  }
}
