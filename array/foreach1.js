const aprovados = ['André', 'Breno', 'Mauro', 'Guilherme']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}: ${nome}`)
}) // para cada nome que o for percorrer, ele vai printar

aprovados.forEach(nome => console.log(nome)) // mesma coisa mas com arrow

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados) // mesma coisa mas definindo antes e passando a função