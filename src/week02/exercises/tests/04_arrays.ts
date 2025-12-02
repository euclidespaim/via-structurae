const valores: (number | string)[] = [10, "20", 5, "teste"]

const somados = valores.map( v => typeof v === "string" && !isNaN(Number(v)) ? Number(v) : v )

console.log(somados) // [10, 20, 5, "teste"]