import { CreateProductUseCase } from "@week02/app/catalog/create-product.usecase";
import { ListProductsUseCase } from "@week02/app/catalog/list-products.usecase";
import { FilterProductsUseCase } from "@week02/app/catalog/filter-products.usecase";


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
