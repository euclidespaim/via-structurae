interface Pessoa {
  nome: string;
  idade: number;
  profissao?: string; // propriedade opcional
}

const pessoa: Pessoa = {
  nome: "Alice",
  idade: 30,
  profissao: "Engenheira"
};

console.log(`Nome: ${pessoa.nome}`); // Nome: Alice