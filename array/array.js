console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Gui', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Gui', 'Ana'] // forma recomendável de se fazer
console.log(aprovados[0]) // primeiro elemento
console.log(aprovados[1]) // segundo elemento
console.log(aprovados[2]) // terceiro elemento
console.log(aprovados[3]) // o quarto elemento não existe, então é retornado undefined.

aprovados[3] = 'Bellatrix' // método comum para se substituir elemento (nesse caso está add um novo)
aprovados.push('Ohio') // método comum para se add algo novo no array
console.log(aprovados)
console.log(aprovados.length)

aprovados[9] = 'Rafael' /* ao colocar um elemento mais a frente no array
                        o js vai preencher o espaço vazio com undefineds,
                        para exemplificar que são slots vazios. */
console.log(aprovados[8] === undefined)

console.log(aprovados.length)
console.log(aprovados)

aprovados.sort() // altera o array inicial.
console.log(aprovados)

delete aprovados[0]
console.log(aprovados)

aprovados2 = ['Abigail', 'Leah', 'Haley']

aprovados2.splice(1, 1, '1', '2') // Da para incluir, deletar ou os dois ao mesmo tempo a partir de um indice
console.log(aprovados2)