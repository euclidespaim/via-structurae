# Via Structurae — Week02: Organização em Camadas e Estrutura de Projeto

## 🎯 Objetivo da Semana 2
A Week02 marca a transição do “TypeScript básico” para a construção de **um mini-projeto modular**, com separação de responsabilidades entre camadas.  
O foco aqui não é Clean Architecture completa — isso virá nas próximas semanas —  
mas sim **entender os papéis de Domain, Infra e App** dentro de um projeto organizado.

Essa semana representa o primeiro contato com arquitetura real:  
**arrumar a casa antes de crescer o sistema.**

---

# 🧱 **1. Estrutura de Pastas da Week02**

A Week02 segue esta estrutura fixa:

```
week02/
   ├── project/
   │     ├── app/
   │     │     └── catalog/
   │     ├── domain/
   │     │     └── catalog/
   │     ├── infra/
   │     └── index.ts
   └── exercises/
```

### ✔ `project/`
Contém **o código oficial da semana**, estável, usado como base para a evolução futura.

### ✔ `exercises/`
Ficará disponível para testes, desafios e melhorias que **não alteram o core**.

---

# 🧩 **2. As Camadas da Week02**

## **2.1 Domain — Regras e Modelos**
Aqui definimos as entidades da aplicação.  
Na Week02, o domínio tem apenas uma entidade:

### `domain/catalog/product.ts`
```ts
export type Category = "tech" | "food" | "office";

export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
}
```

O domínio **não sabe onde os dados são guardados**, nem como.  
Ele apenas define **o que é um produto**.

---

## **2.2 Infra — Armazenamento de Dados**
Na Week02, infraestrutura é só um **array em memória**, simples:

### `infra/product.data.ts`
```ts
import { Product } from "../domain/catalog/product";

export const products: Product[] = [];
```

O objetivo é criar um local único e centralizado para guardar dados,  
separando isso da lógica dos use cases.

---

## **2.3 App — Casos de Uso**
Casos de uso representam **ações da aplicação**.

São três:

### 1) Criar produto
```ts
export class CreateProductUseCase {
  execute(name: string, price: number, category: Category): Product {
    const product = { id: nextId++, name, price, category };
    products.push(product);
    return product;
  }
}
```

### 2) Listar produtos
```ts
export class ListProductsUseCase {
  execute(): Product[] {
    return products;
  }
}
```

### 3) Filtrar produtos por categoria
```ts
export class FilterProductsUseCase {
  execute(category: Category): Product[] {
    return products.filter(p => p.category === category);
  }
}
```

**Características dessa fase:**
- Sem interfaces.
- Sem injeção de dependências.
- Sem camada de serviços.
- Foco na organização básica e no fluxo de dados.

A evolução vem nas semanas posteriores.

---

# 🧩 **3. index.ts — O Cérebro da Execução**

### `project/index.ts`
```ts
import { CreateProductUseCase } from "./app/catalog/create-product.usecase";
import { ListProductsUseCase } from "./app/catalog/list-products.usecase";
import { FilterProductsUseCase } from "./app/catalog/filter-products.usecase";

const create = new CreateProductUseCase();
const list = new ListProductsUseCase();
const filter = new FilterProductsUseCase();

create.execute("Notebook Lenovo", 4500, "tech");
create.execute("Maçã Gala", 3.5, "food");
create.execute("Grampeador", 12.9, "office");

console.log("Todos os produtos:");
console.log(list.execute());

console.log("\nSomente TECH:");
console.log(filter.execute("tech"));
```

## ✔ O index é responsável por:
- Instanciar os casos de uso  
- Inserir dados  
- Coordenar a execução  
- Exibir resultados  

Essa separação mantém os arquivos limpos e cada parte com uma única responsabilidade.

---

# 🧭 **4. Fluxo Completo da Aplicação**

1. **index.ts** chama `create.execute()`  
2. UseCase cria o produto e salva em `products[]`  
3. `list.execute()` retorna todos  
4. `filter.execute()` retorna filtrados  
5. index.ts apenas imprime  

Fluxo resumido:

```
index.ts → usecases → infra → dados
```

---

# 📚 **5. Conceitos Aprendidos na Week02**

## ✔ 1. Domínio separado da infraestrutura  
Modelos não conhecem a origem dos dados.

## ✔ 2. Infraestrutura única para armazenamento  
Mesmo em um array simples, há uma separação clara.

## ✔ 3. Casos de uso controlam a lógica da aplicação  
Eles são o ponto de entrada da regra do sistema.

## ✔ 4. Fluxo de dados encadeado  
Index → UseCases → Infra → Dados

## ✔ 5. Organização modular  
Um diretório por camada, fácil de navegar.

---

# 🧠 **6. Por Que Isso Importa?**

Porque na Week03 vamos evoluir isso para:

- generics aplicados a usecases  
- type guards  
- narrowing avançado  
- repository pattern  
- injeção de dependência  
- repositórios genéricos  
- exceções  
- DTOs  
- testes automatizados  
- services  
- clean architecture de verdade

E nada disso faz sentido se tu não tiver base sólida da Week02.

A Week02 é **o alicerce da arquitetura**.

---

# 📝 **7. O Que Vem na Week03**
(um preview direto)

- interface de repositório  
- repositório avançado  
- mocks  
- DTOs  
- services  
- generics  
- exceptions  
- fluxo mais robusto  

---

# 🎉 **Week02 concluída!**
Projeto limpo, estável e pronto para evoluir.
