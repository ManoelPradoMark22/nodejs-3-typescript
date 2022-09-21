import { Request, Response } from 'express';

import { ImportCategoryUseCase } from './ImportCategoryUseCase';

interface IMulterRequest extends Request {
  file: File;
}

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  handle(req: Request, res: Response) {
    const { file } = req as IMulterRequest;

    this.importCategoryUseCase.execute(file);

    return res.send();
  }
}

export { ImportCategoryController };
