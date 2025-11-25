export type User = {
  id: number;
  name: string;
  active?: boolean;
};

export type Product = {
  id: number;
  name: string;
  price: number;
};

export type Order = {
  id: number;
  userId: number;
  products: Product[];
  total: number;
};
