const produto = new Object

produto.nome = 'Ferrari'
produto.preco = 220

console.log(produto)
delete produto.preco

console.log(produto)

const carro = {
    nome: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'gui',
        idade: 19,
        endereco: {
            logradouro: 'aaaa',
            numero: 132
        }
    },
    marca: 'Audi',
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['nome'] = 'A3'

// delete carro.proprietario.endereco
// delete carro.calcularValorSeguro

console.log(carro)