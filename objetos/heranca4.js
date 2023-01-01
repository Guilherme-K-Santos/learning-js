function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)
/* quando se usa uma função construtora, o __proto__ dos objs descendentes
dessa função é igual estritamente ao atributo (da função) -> função.prototype */

MeuObjeto.prototype.nome = 'Gabriel'
MeuObjeto.prototype.falar = function() {
    console.log(`Meu nome é ${this.nome}`)
}

obj1.falar()
obj2.nome = 'Leo'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Paulo'
obj3.falar()

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)