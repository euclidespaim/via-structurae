
# Via Structurae — Week02 (Expandida): Arquitetura em Camadas + Laboratório Avançado (Exercises)

## 🎯 Objetivo da Semana 2
A Week02 solidifica a transição entre o TypeScript básico (Week01) e a organização arquitetural moderna.  
Ela é dividida em duas partes:

- **project/** → versão oficial da semana, simples, estável e didática  
- **exercises/** → laboratório avançado com DI, interfaces, repositórios alternativos e testes estruturais  

Essa separação garante uma evolução limpa e progressiva.

---

# 🧱 1. Estrutura Completa da Week02

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
         ├── app/
         ├── domain/
         ├── infra/
         └── index.ts
```

---

# 📌 2. Week02/project — Arquitetura Base (Snapshot Oficial)

## 2.1 Camada Domain
Define entidades e tipos centrais da aplicação.

```ts
export type Category = "tech" | "food" | "office";

export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
}
```

## 2.2 Camada Infra
Simples fonte de dados:

```ts
export const products: Product[] = [];
```

## 2.3 Camada App (UseCases)
Três casos de uso essenciais:

- create-product
- list-products
- filter-products

Todos acessam diretamente `products[]`.

## 2.4 index.ts (Orquestrador)

Fluxo simples:

```
index → usecases → infra → dados
```

---

# 🧩 3. Conceitos Fundamentais da Week02/project

### ✔ Separação de responsabilidades  
Cada camada tem um papel claro.

### ✔ Domínio isolado  
Define o “o quê”, não o “como”.

### ✔ UseCases como orquestradores  
Contêm a lógica da interação.

### ✔ Infra simples  
Fonte de dados única, sem complexidade.

### ✔ Execução linear  
Ideal para ensino e compreensão inicial.

---

# 🧪 4. Week02/exercises — Arquitetura Avançada

Agora entra a parte que prepara para a Week03.

Aqui introduzimos:

- Interfaces  
- Repositórios avançados  
- Mocking  
- Dependency Injection  
- Validação mínima  
- Separação total de camadas  
- Fluxo desacoplado e testável  

---

# 🧩 5. Exercício 1 — ProductRepository (Interface)

Caminho:

```
week02/exercises/domain/catalog/product.repository.ts
```

### 📄 Interface completa
```ts
export interface ProductRepository {
  create(product: Omit<Product, "id">): Product;
  findAll(): Product[];
  findByCategory(category: Product["category"]): Product[];
}
```

### 📌 Conceitos importantes
- Contrato fixo  
- Polimorfismo por estrutura  
- UseCases deixam de conhecer implementações concretas  

---

# 🧩 6. Exercício 2 — ProductMemoryRepository (Avançado)

Caminho:

```
week02/exercises/infra/catalog/product.memory.repository.ts
```

Repositório especializado com controle de ID e armazenamento isolado.

---

# 🧩 7. Exercício 3 — UseCases Avançados com DI

Caminho:

```
week02/exercises/app/catalog/*.usecase.ts
```

Agora os casos de uso recebem a dependência via construtor:

```ts
constructor(private repo: ProductRepository) {}
```

Isso habilita testes, mocks e repositórios alternativos.

---

# 🧩 8. Exercício 4 — index.ts Avançado (Integração)

Caminho:

```
week02/exercises/index.ts
```

Integra:
- um repositório concreto  
- todos os usecases  
- imprime resultados para teste  

---

# 🧩 9. Exercício 5 — ProductMockRepository (Testes)

Caminho:

```
week02/exercises/infra/catalog/product.mock.repository.ts
```

Mock usado para validar o comportamento dos usecases.

---

# 🧠 10. Conceitos Teóricos Introduzidos nos Exercises

- Injeção de Dependências  
- Repository Pattern  
- Polimorfismo via Interface  
- Mocking  
- Testabilidade  
- Camadas independentes  

---

# 🧭 11. project × exercises — Comparação

| Aspecto | project (oficial) | exercises (avançado) |
|--------|-------------------|-----------------------|
| Acesso a dados | direto | interface |
| Persistência | array simples | repos isolados |
| UseCases | simples | com DI |
| Testabilidade | baixa | alta |
| Evolução | inicial | pronta para Week03 |

---

# 🚀 12. O que Week02 prepara para a Week03

Na próxima semana vamos entrar em:
- generics avançados  
- type guards  
- narrowing  
- DTOs  
- exceções customizadas  
- repositórios genéricos  
- serviços de domínio  
- testes unitários com Jest  

---

# 🎉 Week02 concluída!
project = snapshot didático  
exercises = laboratório avançado  
Pronto para a Week03.
