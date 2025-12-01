import { productRepository } from "@week02/infra/catalog/product.memory.repo";

export class ListProductsUseCase {
  execute() {
    return productRepository.list();
  }
}
