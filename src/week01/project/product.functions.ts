import { Product } from "./product.types";
import { products } from "./product.data";

let nextId = 1;

export function createProduct(
  name: string,
  price: number,
  category: Product["category"]
): Product {
  const product: Product = {
    id: nextId++,
    name,
    price,
    category
  };

  products.push(product);
  return product;
}

export function listProducts(): Product[] {
  return products;
}

export function filterByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category);
}

export function formatPrice(product: Product): string {
  return `R$ ${product.price.toFixed(2)}`;
}
