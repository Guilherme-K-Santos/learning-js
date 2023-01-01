const pessoa = {
    nome: 'ana',
    idade: 6,
    endereco: {
        numero: 12,
        rua: 'aksakskkwdkwdw'
    }
}

// const {nome, idade} = pessoa;
// console.log(nome, idade)

const {nome: nome1, idade: idade1} = pessoa;
console.log(nome1, idade1)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada) 

const {endereco: {numero: num_casa, rua: rua_pessoa, cep}} = pessoa;
console.log(num_casa, rua_pessoa, cep)