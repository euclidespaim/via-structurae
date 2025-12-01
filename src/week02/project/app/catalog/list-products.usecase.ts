import { ProductRepository } from "@week02/project/domain/catalog/product.repository";

export class ListProductsUseCase {
  constructor(private repo: ProductRepository) {}

  execute() {
    return this.repo.findAll();
  }
}
