class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

function CriarPessoa(nome) {
    return {
        nome: nome,
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = CriarPessoa('João')
console.log(p2)
console.log(p2.nome)
p2.falar()