type Timestamped = { createdAt: Date };
type Item = { name: string; value: number };

export type LogItem = Item & Timestamped;

export const log: LogItem = {
  name: "Teste",
  value: 10,
  createdAt: new Date()
};
