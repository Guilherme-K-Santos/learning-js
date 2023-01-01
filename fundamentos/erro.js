function tratarErroLancar(erro) {
    throw new Error('puts mano :(')
}

function imprimerNomeGritado(obj) {
    try {
        console.log(obj.nome.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroLancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Guilherme' }
imprimerNomeGritado(obj)