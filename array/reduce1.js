const alunos = [
    {nome: 'Albedo', nota: 7.3, bolsista: false},
    {nome: 'Keqing', nota: 9.7, bolsista: true},
    {nome: 'Diluc', nota: 8.4, bolsista: false},
    {nome: 'Kaeya', nota: 9.3, bolsista: true},
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)
