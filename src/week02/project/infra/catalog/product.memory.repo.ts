import { Product } from "@week02/project/domain/catalog/product";
import { ProductRepository } from "@week02/project/domain/catalog/product.repository";

export class ProductMemoryRepository implements ProductRepository {
  private products: Product[] = [];
  private nextId = 1;

  create(product: Omit<Product, "id">): Product {
    const newProduct: Product = {
      id: this.nextId++,
      ...product
    };

    this.products.push(newProduct);
    return newProduct;
  }

  findAll(): Product[] {
    return this.products;
  }

  findByCategory(category: Product["category"]): Product[] {
    return this.products.filter((p) => p.category === category);
  }
}
