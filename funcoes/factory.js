const prod1 = {
    nome: 'b',
    preco: 45
}

const prod2 = {
    nome: 'a',
    preco: 12414
} // muito cod igual

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
} // factory

console.log(criarPessoa())