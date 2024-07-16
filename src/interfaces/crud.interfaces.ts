export interface CrudEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CrudService<T> {
  findAll(): Promise<T[]>;
  findOne(id: number): Promise<T>;
  create(data: T): Promise<T>;
  update?(id: number, data: Partial<T>): Promise<T>;
  delete(id: number): Promise<void>;
}
