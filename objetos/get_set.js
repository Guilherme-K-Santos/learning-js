const sequencia = {
    _valor: 1, // <-- variável privada, convenção
    get valor() {
        return this._valor++ // pega o valor e acrescenta
    },
    set valor(valor) {
        if (valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1
console.log(sequencia.valor, sequencia.valor)