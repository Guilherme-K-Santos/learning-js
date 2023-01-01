function Produto(nome, preco, desconto = 0.1) {
    return {
        nome: `${nome}`,
        preco: preco,
        desconto: preco - preco * desconto
    }
}

macarrão = Produto('macarrão', 20, 0.1)
uva = Produto('Uva', 10, 0.5)
farinha = Produto('Farinha', 15)
console.log(macarrão, uva, farinha)
