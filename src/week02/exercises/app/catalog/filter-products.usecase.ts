import { ProductRepository } from "../../domain/catalog/product.repository";
import { Product } from "../../../project/domain/catalog/product";

export class FilterProductsUseCase {
  constructor(private repo: ProductRepository) {}

  execute(category: Product["category"]): Product[] {
    if (!category) {
      throw new Error("Category is required");
    }

    return this.repo.findByCategory(category);
  }
}
