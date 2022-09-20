import { Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get('/', (req, res) => {
  // esse listCategoriesController é o index.ts (nao precisa especificar /index.ts na importacao)
  return listCategoriesController.handle(req, res);
});

export { categoriesRoutes };
