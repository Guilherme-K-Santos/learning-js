let valor
console.log(valor)

valor = null;
console.log(valor)

const produto = {}

console.log(produto.preco)
console.log(produto)

produto.preco = 3.50;

console.log(produto)

produto.preco = undefined // EVITE ATRIBUIR UNDEFINED
console.log(!!produto.preco)
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)