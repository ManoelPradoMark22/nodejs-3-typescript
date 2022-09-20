interface ICreateSpecificationsDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationsDTO): void;
}

export { ISpecificationsRepository, ICreateSpecificationsDTO };
