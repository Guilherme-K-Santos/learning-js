// todos eles tem atributos .prototype
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// ------------------------------------------------

// mexendo / criando funcionalidades.
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola aloalo banana'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())

// --------------------------------

// sobrescrevendo uma função pronta do js NUNCA FAÇA ISSO - CUIDADO
String.prototype.toString = function () {
    return 'scrr'
} 

console.log('Escola aloalo banana'.toString())