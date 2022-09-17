import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export default function createCourse(req: Request, res: Response) {
  CreateCourseService.execute({
    name: 'Node.js',
    educator: 'Manoel',
    duration: 10,
  });

  CreateCourseService.execute({
    name: 'React.js',
    educator: 'Diego',
  });

  return res.send();
}
