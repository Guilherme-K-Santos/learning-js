const pessoa = {
    nome: 'Rebecca',
    idade: 4,
    peso: 12
}

console.log(Object.keys(pessoa)) // devolve todas as chaves
console.log(Object.values(pessoa)) // devolve todos os valores
console.log(Object.entries(pessoa)) // array com arrays com a chave e o respectivo valor

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
}) // percorre os arrays e imprime bonito

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: 01/01/2012
}) // pode-se definir propriedades especificas de um atributo.

console.log(pessoa)
console.log(Object.keys(pessoa))

// object.assign

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) /* concatena/une/merge informações no mesmo obj, sobrescreve
                                        um atributo ja antes criado */
console.log(obj)

obj.c = 1123
console.log(obj)
