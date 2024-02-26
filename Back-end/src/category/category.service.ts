import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  findOne(id: any): Promise<Category> {
    return this.categoryRepository.findOne(id);
  }

  async remove(id: any): Promise<void> {
    await this.categoryRepository.delete(id);
  }

  async create(category: Category): Promise<Category> {
    return await this.categoryRepository.save(category);
  }

  async update(id: any, category: Category): Promise<void> {
    await this.categoryRepository.update(id, category);
  }
}
