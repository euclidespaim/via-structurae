# 🏛️ Semana 1 — Fundamentos de TypeScript  
### *Teoria Oficial — Via Structurae*

---

# 🧱 Introdução

A Semana 1 do Via Structurae tem como objetivo **construir a base mental do TypeScript**.  
O foco aqui é aprender **como o compilador pensa** e como descrever dados de forma precisa, segura e evolutiva.

Programar bem em TypeScript exige três pilares:

1. **Descrever corretamente o formato dos dados**  
2. **Usar o compilador como aliado**  
3. **Eliminar ambiguidades (evitar `any`)**

Esta semana desenvolve esses três pilares através de teoria, exemplos e exercícios progressivos.

---

# 🧩 1. Tipos Primitivos

Os tipos fundamentais:

- `string`
- `number`
- `boolean`
- `undefined`
- `null`
- `unknown` (importante)
- `never` (ver mais na Semana 5)

Exemplo:

```ts
let nome: string = "Euclides";
let idade: number = 45;
let ativo: boolean = true;
```

O TypeScript obriga clareza: tu descreve a intenção antes de escrever a lógica.

---

# 🏷️ 2. Type Aliases

Aliases permitem **criar nomes para formatos de dados**:

```ts
type User = {
  id: number;
  name: string;
  active?: boolean;
};
```

Por que isso importa?

- evita repetição  
- organiza o domínio  
- melhora legibilidade  
- facilita manutenção  

Aliases são a fundação de toda arquitetura que vamos construir.

---

# 🔀 3. Union Types  
*(Um tipo OU outro)*

```ts
type Role = "admin" | "user" | "manager";
```

Exemplo:

```ts
function canAccessDashboard(role: Role): boolean {
  return role === "admin";
}
```

Unions representam **variação controlada**.  
São essenciais em validações, APIs e parsing de dados.

---

# 🔍 4. Narrowing  
*(Provar para o TS qual tipo está sendo usado)*

Quando uma variável pode ter mais de um tipo, o TypeScript exige **prova**.

### Métodos de narrowing:

- `typeof`
- `in`
- `instanceof`
- `Array.isArray`
- verificar explicitamente `null` ou `undefined`

Exemplo:

```ts
function formatInput(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}
```

Sem narrowing, o TS **não permite** operações específicas.

---

# 🧬 5. Intersections  
*(Construção de tipos compostos)*

```ts
type WithId = { id: number };
type WithName = { name: string };

type User = WithId & WithName;
```

Usado para compor comportamentos.  
É a base para dominar Clean Architecture mais à frente.

---

# 🧠 6. Funções Tipadas

Funções devem ter:

- parâmetros tipados  
- retorno explícito  
- cuidado com parâmetros opcionais (`?`)  

Exemplo:

```ts
function calcIMC(peso: number, altura: number): number {
  return peso / (altura * altura);
}
```

---

# 🛠️ 7. Exercícios Comentados

## **Exercício 1 — Criar tipos do domínio**
Crie tipos para:

- Usuário  
- Produto  
- Pedido  

Treina abstração e organização.

---

## **Exercício 4 — Função polimórfica simples**
```ts
formatInput(value: string | number)
```

Naturaliza unions + narrowing.

---

## **Exercício 6 — Array ou valor único**
Padrão comum em libs e APIs.

---

## **Exercício 9 — Callback**
Introduz conceitos fundamentais usados em:

- testes  
- eventos  
- interceptors  

---

# 📦 8. Mini-Projeto da Semana — Catálogo

Criar:

```ts
type Product = {
  id: number;
  name: string;
  price: number;
  category: "tech" | "food" | "office";
};
```

Funções:

- `createProduct`  
- `listProducts`  
- `filterByCategory`  
- `formatPrice`  

É o primeiro módulo com:

- funções puras  
- tipos reais  
- dados simulados  

---

# 📚 9. Resumo da Semana

Após completar esta semana, tu deve:

✓ Dominar tipos básicos  
✓ Escrever unions e intersections naturalmente  
✓ Aplicar narrowing corretamente  
✓ Criar funções totalmente tipadas  
✓ Organizar pequenos módulos  
✓ Modelar dados com clareza  

Essa é a **base sólida do TypeScript moderno**.

---

# 🚀 10. Semana 2 — O que vem pela frente

- tsconfig avançado  
- aliases de path  
- arquitetura base por camadas  
- organização profissional do projeto  

Semana 2 é onde começamos a construir **arquitetura de verdade**.

---

Feito para acompanhar o módulo prático da Semana 1.
