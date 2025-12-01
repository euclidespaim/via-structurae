import { ProductRepository } from "../../domain/catalog/product.repository";
import { Product } from "../../../project/domain/catalog/product";

export class ListProductsUseCase {
  constructor(private repo: ProductRepository) {}

  execute(): Product[] {
    return this.repo.findAll();
  }
}
