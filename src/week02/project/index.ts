import { ProductMemoryRepository } from "@week02/project/infra/catalog/product.memory.repo";

import { CreateProductUseCase } from "@week02/project/app/catalog/create-product.usecase";
import { ListProductsUseCase } from "@week02/project/app/catalog/list-products.usecase";
import { FilterProductsUseCase } from "@week02/project/app/catalog/filter-products.usecase";

const repo = new ProductMemoryRepository();

const create = new CreateProductUseCase(repo);
const list = new ListProductsUseCase(repo);
const filter = new FilterProductsUseCase(repo);

create.execute({
  name: "Notebook Lenovo",
  price: 4500,
  category: "tech"
});

create.execute({
  name: "Maçã Gala",
  price: 3.5,
  category: "food"
});

console.log("Todos os produtos:");
console.log(list.execute());

console.log("Só TECH:");
console.log(filter.execute("tech"));
