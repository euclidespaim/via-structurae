// MODELAGEM DO DOMÍNIO (forma dos dados)

export type ProductCategory = "tech" | "food" | "office";

export type Product = {
  id: number;
  name: string;
  price: number;
  category: ProductCategory;
};
