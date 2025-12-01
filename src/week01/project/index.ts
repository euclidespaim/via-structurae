import { createProduct, listProducts, filterByCategory, formatPrice } from "./product.functions";

createProduct("Notebook Dell", 4500, "tech");
createProduct("Café 500g", 18.9, "food");
createProduct("Caneta Vermelha", 2.5, "office");
createProduct("Smartphone Samsung", 3200, "tech");

console.log("Todos os produtos:", listProducts());
console.log("Categoria tech:", filterByCategory("tech"));
console.log("Preços formatados: ", listProducts().map(formatPrice));
console.log("Preço formatado:", formatPrice(listProducts()[0]));
