// REGRAS DO DOMÍNIO (lógica pura, sem dependências externas)

import { Product, ProductCategory } from "./product";

export function validateProduct(
  name: string,
  price: number,
  category: ProductCategory
): void {
  if (!name || name.trim().length < 2) {
    throw new Error("Nome do produto inválido.");
  }

  if (price <= 0) {
    throw new Error("Preço deve ser maior que zero.");
  }

  const allowed: ProductCategory[] = ["tech", "food", "office"];
  if (!allowed.includes(category)) {
    throw new Error("Categoria inválida.");
  }
}

export function formatPrice(price: number): string {
  return `R$ ${price.toFixed(2)}`;
}
