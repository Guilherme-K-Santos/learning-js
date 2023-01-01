function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('até breve', 2345)
console.log(aula1, aula2)
//  usando new normal

// simulando new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}
// essa função vai linkar os objs criados a uma função criadora.

const aula3 = novo(Aula, '3 aula', 1813)
const aula4 = novo(Aula, '4 aula', 1823)
console.log(aula3, aula4)

// objetos criados a partir de new "artificial"

const aula5 = Aula('5 aula', 1235813) 
const aula6 = Aula('6 aula', 182323) 
console.log(aula5, aula6)

// retorna´ra undefined, pois não são objetos criados (com new)
