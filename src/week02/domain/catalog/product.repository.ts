import { Product } from "./product";

export interface ProductRepository {
  create(product: Omit<Product, "id">): Product;
  findAll(): Product[];
  findByCategory(category: string): Product[];
}
