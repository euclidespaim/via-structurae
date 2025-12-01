import { ProductMemoryRepository } from "./infra/catalog/product.memory.repository";

import { CreateProductUseCase } from "./app/catalog/create-product.usecase";
import { ListProductsUseCase } from "./app/catalog/list-products.usecase";
import { FilterProductsUseCase } from "./app/catalog/filter-products.usecase";

import { ProductMockRepository } from "./infra/catalog/product.mock.repository";

const repo = new ProductMockRepository();


// use cases avançados
const create = new CreateProductUseCase(repo);
const list = new ListProductsUseCase(repo);
const filter = new FilterProductsUseCase(repo);

// criando alguns produtos
create.execute({ name: "SSD 1TB", price: 350, category: "tech" });
create.execute({ name: "Banana Prata", price: 4, category: "food" });
create.execute({ name: "Caneta Azul", price: 2.5, category: "office" });

// listagem geral
console.log("=== LISTA COMPLETA ===");
console.log(list.execute());

// filtro por categoria
console.log("\n=== APENAS TECH ===");
console.log(filter.execute("tech"));
