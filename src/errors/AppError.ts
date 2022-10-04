export class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  // se nao vier nenhum statusCode como param, o default será 400
  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
