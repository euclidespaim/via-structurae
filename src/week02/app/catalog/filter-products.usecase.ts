import { Product } from "@week02/domain/catalog/product";
import { productRepository } from "@week02/infra/catalog/product.memory.repo";

export class FilterProductsUseCase {
  execute(category: Product["category"]) {
    return productRepository.filterByCategory(category);
  }
}
