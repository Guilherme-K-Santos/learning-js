const ferrari = {
    modelo: 'f40',
    velMax: 324
}

const volvo = {
    modelo: 'dad 0',
    velMax: 150
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function MeuObjeto() {
    console.log(typeof Object, typeof MeuObjeto)
    console.log(Object.prototype, MeuObjetom.prototype)
}