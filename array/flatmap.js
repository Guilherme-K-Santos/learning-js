const escola = [{
    nome: 'Turma A1',
    alunos: [{
        nome: 'Kakashi',
        nota: 8.1
    }, {
        nome: 'Obito',
        nota: 4
    }, {
        nome: 'Rin',
        nota: 2
    }]
}, {
    nome: 'Turma A2',
    alunos: [{
        nome: 'Minato',
        nota: 8.1
    }, {
        nome: 'Kushina',
        nota: 4
    }, {
        nome: 'Minen',
        nota: 7
}]
}]

const getNotaAluno = a => a.nota
const getNotaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotaTurma)
console.log(notas1)

console.log([].concat([ 8.1, 4, 2 ], [ 8.1, 4, 7 ]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaTurma)