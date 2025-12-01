import { validateProduct } from "@week02/domain/catalog/product.service";
import { productRepository } from "@week02/infra/catalog/product.memory.repo";
import { Product } from "@week02/domain/catalog/product";

export class CreateProductUseCase {
  execute(name: string, price: number, category: Product["category"]): Product {
    validateProduct(name, price, category);
    return productRepository.create(name, price, category);
  }
}
