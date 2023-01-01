const nums = [1, 2, 3, 4, 5]

// for com propósito

let resultados = nums.map(function(elemento) {
    return elemento * 2
})

console.log()

const soma10 = elementos => elementos + 10
const triplo = elementos => elementos * 3
const paraDinheiro = elementos => `R$ ${parseFloat(elementos).toFixed(2).replace('.', ',')}`

// passando map várias vezes para um array
resultados = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultados)