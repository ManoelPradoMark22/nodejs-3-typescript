import { Router } from 'express';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/categories', (req, res) => {
  const { name, description } = req.body;

  const categorie = {
    name,
    description
  };

  categories.push(categorie);

  return res.status(201).json(categorie);
});

export { categoriesRoutes };