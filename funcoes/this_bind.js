const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas funcional e orientação a obj

const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa() // bind amarrou o this ao obj pessoa