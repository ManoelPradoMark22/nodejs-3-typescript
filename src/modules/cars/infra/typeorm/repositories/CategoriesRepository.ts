import { getRepository, Repository } from 'typeorm';

import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../../../repositories/ICategoriesRepository';
import { Category } from '../entities/Category';

class CategoriesRepository implements ICategoriesRepository {
  // private categories: Category[];
  private repository: Repository<Category>;

  // padrão de projeto singleton - singleton pattern
  /* cria apenas uam instancia de uma classe p ser uma instancia global */
  // private static INSTANCE: CategoriesRepository;

  // private constructor() {
  //   // this.categories = [];
  // }

  constructor() {
    this.repository = getRepository(Category);
  }

  // public static getInstance(): CategoriesRepository {
  //   if (!CategoriesRepository.INSTANCE)
  //     CategoriesRepository.INSTANCE = new CategoriesRepository();

  //   return CategoriesRepository.INSTANCE;
  // }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    // const category = new Category();

    // Object.assign(category, {
    //   name,
    //   description,
    //   created_at: new Date(),
    // });

    // somento o repository.create() q nao precisa do await - ao criar o Repository
    const category = this.repository.create({
      description,
      name,
    });

    // this.categories.push(category);
    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    // return this.categories;
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    // const category = this.categories.find(category => category.name === name);
    const category = await this.repository.findOne({ name });

    return category;
  }
}

export { CategoriesRepository };
