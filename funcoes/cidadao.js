function fun1() {
    
}
// criação normal

const fun2 = function() {

}
// armazenando variável

const array = [function(a, b) {return a + b}, fun1, fun2]
// armazenando em array
console.log(array[0](5, 7))

const obj = {}
obj.falar = function() {return 'blablabla'}
// armazenando em objeto
console.log(obj.falar())

function run(fun) {
    fun()
}
// passando uma função como parâmetro de outra
run(function(){console.log('exec...')})

function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2,3)(4) // dois parenteses pois sabemos que virá outra função para ser executada

// uma função pode retornar/conter uma função

const cinco = soma(1, 1) // função do retorno ficará salva nessa variável
cinco(3) // que será executada dnv aqui