import { ProductRepository } from "@week02/domain/catalog/product.repository";

export class FilterProductsUseCase {
  constructor(private repo: ProductRepository) {}

  execute(category: string) {
    return this.repo.findByCategory(category);
  }
}
