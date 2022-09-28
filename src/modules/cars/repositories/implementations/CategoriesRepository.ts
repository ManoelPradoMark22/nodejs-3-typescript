import { getRepository, Repository } from 'typeorm';

import { Category } from '../../entities/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  // private categories: Category[];
  private repository: Repository<Category>;

  // padrão de projeto singleton - singleton pattern
  /* cria apenas uam instancia de uma classe p ser uma instancia global */
  private static INSTANCE: CategoriesRepository;

  private constructor() {
    // this.categories = [];
    this.repository = getRepository(Category);
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE)
      CategoriesRepository.INSTANCE = new CategoriesRepository();

    return CategoriesRepository.INSTANCE;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    // const category = new Category();

    // Object.assign(category, {
    //   name,
    //   description,
    //   created_at: new Date(),
    // });

    const category = this.repository.create({
      description,
      name,
    });

    // this.categories.push(category);
    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    // return this.categories;
    const categories = this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    // const category = this.categories.find(category => category.name === name);
    const category = await this.repository.findOne({ name });

    return category;
  }
}

export { CategoriesRepository };
