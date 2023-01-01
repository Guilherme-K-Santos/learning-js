// notação literal
const obj1 = {}
console.log(obj1)

// objeto em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funções construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => preco * (1 - desconto)
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Caneta', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Luiz', 11400, 2)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// USando JSON (ainda vmaos ver)
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)