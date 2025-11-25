import { createProduct, listProducts, filterByCategory, formatPrice } from "./product.functions";

createProduct("Notebook Dell", 4500, "tech");
createProduct("Café 500g", 18.9, "food");
createProduct("Caneta Azul", 2.5, "office");

console.log("Todos os produtos:", listProducts());
console.log("Tech:", filterByCategory("tech"));
console.log("Preço formatado:", formatPrice(listProducts()[0]));
