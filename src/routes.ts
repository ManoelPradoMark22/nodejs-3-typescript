import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(req: Request, res: Response) {
  CreateCourseService.execute("Node.js", 10, "Manoel");

  return res.send();
}