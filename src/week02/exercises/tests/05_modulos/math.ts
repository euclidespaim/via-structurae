export function soma(a: number, b: number): number {
  return a + b;
}

export function somaFlex(a: number | string, b: number | string): number | string {
  const n1 = !isNaN(Number(a)) ? Number(a) : String(a);
  const n2 = n1 === Number(a) && !isNaN(Number(b)) ? Number(b) : String(b);
  return typeof n1 === "number" && typeof n2 === "number" ? n1 + n2 : String(a) + String(b);
}
