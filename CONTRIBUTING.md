# 🤝 Contribuindo para o Via Structurae

Obrigado por considerar contribuir com o **Via Structurae**!  
Este documento explica como colaborar, propor melhorias e manter consistência no padrão do projeto.

---

# 🧭 Visão Geral

O Via Structurae é um projeto educacional e técnico organizado para evoluir de forma progressiva.  
Toda contribuição deve:

- Manter **clareza** no código e na escrita  
- Seguir a **arquitetura definida** no projeto (/src/domain, /src/app, /src/infra, /src/shared)  
- Respeitar o **escopo de cada semana** do roadmap  
- Priorizar **qualidade** sobre quantidade  

---

# 🛠️ Como Contribuir

## 1. Abra uma Issue Antes de Criar um Pull Request
Explique:

- O problema  
- A solução proposta  
- Qual semana/parte do roadmap será afetada  
- Impacto esperado  

Isso mantém o projeto organizado e alinhado.

---

## 2. Crie uma Branch Descritiva

Siga o padrão:

```
feature/nome-da-feature
fix/corrigir-algo
docs/atualizar-documentacao
refactor/melhorar-modulo-x
```

Exemplos:

- `feature/express-validation-module`
- `docs/update-roadmap-week-07`
- `refactor/clean-architecture-restructure`

---

## 3. Estilo de Código

O código TypeScript deve:

- Usar **ESLint** (quando for habilitado)  
- Respeitar o **padrão de camadas**  
- Evitar `any` sempre que possível  
- Usar nomenclatura clara e intencional  

### Boas práticas:

- Prefira **tipos explícitos**  
- Classes apenas onde fizer sentido  
- Funções puras no domínio  
- Evitar acoplamento desnecessário  

---

# 📚 Estrutura do Projeto

O projeto segue:

```
/public       → site    (HTML, CSS, JS)
/src
  /domain     → regras de negócio puras
  /app        → casos de uso, orquestração
  /infra      → bancos, APIs externas, drivers
  /shared     → utilitários, tipos globais
/docs         → textos, ebooks, rascunhos
```

Essa divisão não é negociável — ela garante evolução sustentável.

---

# 🧪 Testes

Quando adicionar funcionalidades:

- Escreva testes básicos em Vitest  
- Mantenha o padrão AAA (Arrange, Act, Assert)  
- Não escreva testes excessivamente complexos  

---

# 📝 Commits

Use commits descritivos:

```
feat: adicionar validação zod na rota de usuário
fix: corrigir caminho de import no controller
docs: atualizar README com instruções de setup
refactor: mover lógica de domínio para camada correta
```

---

# 📤 Pull Requests

Antes de abrir um PR:

1. Garanta que tudo compila  
2. Rodar testes (`npm test`)  
3. Descreva claramente O QUE e POR QUE  
4. Inclua prints quando alterar o site (public/)  
5. Relacione a Issue correspondente  

Pull requests sem descrição serão recusados.

---

# 🔐 Padrão de Qualidade

Toda contribuição deve seguir:

- Simplicidade  
- Progresso incremental  
- Clareza na intenção  
- Arquitetura limpa  
- Documentação adequada  

---

# 💬 Dúvidas?

Abra uma Issue marcada como:

```
question
discussion
help wanted
```

O objetivo do Via Structurae é ser um projeto colaborativo, sólido e acolhedor.

---

Obrigado por contribuir!  
**Construímos estruturas. Evoluímos juntos.**
