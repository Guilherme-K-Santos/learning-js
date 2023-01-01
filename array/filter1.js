const produtos = [
    {nome: 'Cama', preco: 2499, fragil: false},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.99, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

// console.log(produtos.filter(function(produtos) {
//     return produtos.fragil === true
// }))
const caro = produtos => produtos.preco > 1000
const fragil = produtos => produtos.fragil === true

console.log(produtos.filter(caro).filter(fragil))
