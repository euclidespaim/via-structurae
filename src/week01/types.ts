// Tipos fundamentais usados nos exercícios da semana 1

export type User = {
  id: number;
  name: string;
  active?: boolean;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  category: "tech" | "food" | "office";
};

export type Status = "success" | "error" | "loading";

export type Timestamped = {
  createdAt: Date;
};

export type Item = {
  name: string;
  value: number;
};

export type LogItem = Item & Timestamped;
