const fabricantes = ['audi', 'bm3', 'ferari']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes => console.log(fabricantes))