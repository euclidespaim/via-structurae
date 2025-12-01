import { ProductRepository } from "@week02/project/domain/catalog/product.repository";
import { Product } from "@week02/project/domain/catalog/product";

export class CreateProductUseCase {
  constructor(private repo: ProductRepository) {}

  execute(input: Omit<Product, "id">) {
    // validação mínima (não é obrigatório, mas recomendado)
    if (!input.name || input.price <= 0) {
      throw new Error("Invalid product data");
    }

    return this.repo.create(input);
  }
}
