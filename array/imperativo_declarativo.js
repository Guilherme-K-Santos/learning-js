const alunos= [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

// imperativo - explicar como algo deve ser feito

let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota // só funciona especificamente nesse contexto.
}
console.log(total1 / alunos.length)

// declarativo - dizer o que deve ser feito
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual // varias funções que podem se reusadas
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)