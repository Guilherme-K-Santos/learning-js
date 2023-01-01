const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 31.45}',
    '{ "nome": "Lapis", "preco": 1.45}',
    '{ "nome": "Caneta", "preco": 6.45}'
]

let resultado = carrinho.map(function(elementos) {
    return JSON.parse(elementos).preco
})

console.log(resultado)