import { ProductRepository } from "@week02/project/domain/catalog/product.repository";

export class FilterProductsUseCase {
  constructor(private repo: ProductRepository) {}

  execute(category: string) {
    if (!category) {
      throw new Error("Category is required");
    }

    return this.repo.findByCategory(category);
  }
}
