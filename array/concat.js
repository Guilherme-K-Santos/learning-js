const filhos = ['Minato', 'shisui']
const filhas = ['Kushina', 'Tei']
const todos = filhas.concat(filhos, 'MAIS UM BAHIA') // pode passar mais de um para concatenar

console.log(todos, filhas, filhos)

// passando vários para concatenar - inclusive uma matriz -.
console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))