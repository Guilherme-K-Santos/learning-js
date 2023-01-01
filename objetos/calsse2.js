class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // precisa puxar a instancia do sobrenome da classe acima
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor() {
        super('Silva') 
        /* aqui está sendo passado dois parametros, mas profissão não foi especificada
           ele vai assumir o padrão: 'professor' */
    }
}

const filho = new Filho
console.log(filho)

// Filho { sobrenome: 'Silva', profissao: 'Professor' }