// Object.preventExtensions
// Basicamente proibe a atribuição de novos atributos no objeto.

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promocao'
})
console.log(Object.isExtensible(produto))

produto.descricao = 'Barracha hahahaha'
delete produto.tag

// atenção, não é possível adicionar, mas é possível deletar atributos.
console.log(produto)

// Object.seal

const pessoa = {
    nome: 'Guilherme',
    idade: 35
}
Object.seal(pessoa)
// Sela objeto, não é possível add nem deletar atributos do objeto.
// Porém, é possível editar os atributos já existentes do produto.

console.log(Object.isSealed(pessoa))
pessoa.sobrenome = 'Santos'
delete pessoa.nome
pessoa.idade = 19
console.log(pessoa)

// Object.freeze
// Uma junção dos dois anteriores, um objeto congelado, constante.

const trabalhador = {
    nome: 'João',
    idade: 65
}
Object.freeze(trabalhador)
console.log(Object.isFrozen(trabalhador))
trabalhador.sobrenome = 'Santos'
delete trabalhador.nome
trabalhador.idade = 19
console.log(trabalhador)