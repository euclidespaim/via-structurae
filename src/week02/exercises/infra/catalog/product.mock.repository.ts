import { Product } from "../../../project/domain/catalog/product";
import { ProductRepository } from "../../domain/catalog/product.repository";

export class ProductMockRepository implements ProductRepository {
  private readonly mock: Product[] = [
    { id: 1, name: "Produto Mockado", price: 999, category: "tech" }
  ];

  create(product: Omit<Product, "id">): Product {
    return {
      id: 999,
      ...product
    };
  }

  findAll(): Product[] {
    return this.mock;
  }

  findByCategory(category: Product["category"]): Product[] {
    return this.mock.filter((p) => p.category === category);
  }
}
