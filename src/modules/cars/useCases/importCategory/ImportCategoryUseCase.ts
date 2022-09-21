import { parse as csvParse } from 'csv-parse';
import fs from 'fs';

class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);

    // csv, por padrão, já reconhece o separador sendo a vírgula
    const parseFile = csvParse();

    stream.pipe(parseFile);

    parseFile.on('data', async line => {
      console.log(line);
    });
  }
}

export { ImportCategoryUseCase };
