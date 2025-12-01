import { Product } from "@week02/domain/catalog/product";

class ProductMemoryRepository {
  private products: Product[] = [];
  private nextId = 1;

  create(name: string, price: number, category: Product["category"]): Product {
    const product: Product = {
      id: this.nextId++,
      name,
      price,
      category
    };

    this.products.push(product);
    return product;
  }

  list(): Product[] {
    return this.products;
  }

  filterByCategory(category: Product["category"]): Product[] {
    return this.products.filter((p) => p.category === category);
  }
}

export const productRepository = new ProductMemoryRepository();
