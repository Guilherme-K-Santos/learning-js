const pessoa = {
    nome: 'João'
}
pessoa.nome = 'Ana'
console.log(pessoa)

// pessoa = {nome: 'Pedro'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa)