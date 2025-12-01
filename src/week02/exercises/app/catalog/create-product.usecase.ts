import { Product } from "../../../project/domain/catalog/product";
import { ProductRepository } from "../../domain/catalog/product.repository";

export class CreateProductUseCase {
  constructor(private repo: ProductRepository) {}

  execute(input: Omit<Product, "id">): Product {
    if (!input.name || input.price <= 0) {
      throw new Error("Invalid product data");
    }

    return this.repo.create(input);
  }
}
