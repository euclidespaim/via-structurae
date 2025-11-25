export function greet(name: string, title?: string): string {
  if (title) return `Olá, ${title} ${name}!`;
  return `Olá, ${name}!`;
}
