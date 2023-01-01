const pilotos = ['Vettel', 'Alonso', "Massa"] // é constante, ou seja, não é possivel atribuir mais que 3 elementos ao array
pilotos.pop() // massa fora!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove da primeira posição
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento na primeira posição
console.log(pilotos)

//splice
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(3, 1)
console.log(pilotos)

/* slice serve para você pegar uma parte do array (a partir do index passado 
até exatamente antes do segundo passado), caso nada seja passado, ele retorna 
um array a partir do único passado até o final.*/

// CRIA UM NOVO ARRAY!!

const algunsPilotos1 = pilotos.slice(2) // do indice dois até o fim
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // do indice 1 até o indice 3
console.log(algunsPilotos2)
