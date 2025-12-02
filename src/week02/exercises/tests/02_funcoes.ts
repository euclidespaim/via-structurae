function soma(a: number, b: number): number {
  
  return a + b;
}

function sayHello(name: string, surname: string): string {
  
  return `Hello, ${name} ${surname}!`;
}

function validateAge(age: number | string): number {
  if (typeof age === "string") {
    console.log("Converting age from string to number");
    return Number(age);
  }
  return age;
}

console.log(soma(5, 10)); // 15
console.log(sayHello("John", "Doe")); // Hello, John Doe!
console.log(validateAge("25")); // 25