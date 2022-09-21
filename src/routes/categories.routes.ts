import { Request, Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

interface IMulterRequest extends Request {
  file: File;
}

categoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get('/', (req, res) => {
  // esse listCategoriesController é o index.ts (nao precisa especificar /index.ts na importacao)
  return listCategoriesController.handle(req, res);
});

categoriesRoutes.post('/import', upload.single('file'), (req, res) => {
  const { file } = req as IMulterRequest;
  console.log(file);

  return res.send();
});

export { categoriesRoutes };
