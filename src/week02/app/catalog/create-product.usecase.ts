import { ProductRepository } from "@week02/domain/catalog/product.repository";
import { Product } from "@week02/domain/catalog/product";

export class CreateProductUseCase {
  constructor(private repo: ProductRepository) {}

  execute(data: Omit<Product, "id">) {
    return this.repo.create(data);
  }
}
