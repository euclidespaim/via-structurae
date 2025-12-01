import { Product } from "../../../project/domain/catalog/product";

export interface ProductRepository {
  create(product: Omit<Product, "id">): Product;
  findAll(): Product[];
  findByCategory(category: Product["category"]): Product[];
}
