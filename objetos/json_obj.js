const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma(){
        return a + b + c
    }
}

console.log(JSON.stringify(obj))

/* função stringify vai transformar o objeto em JSON
   *note que a função saiu fora, pois JSON é um formato de dados */

//não é assim:
// console.log(JSON.parse("{a: 1, b: 2, c:3}")) <- isso não é json
// console.logJSON.parse("{'a': 1, 'b': 2, 'c':3}") //<- todos os atributos em JSON tem aspas duplas.

//correto:
console.log(JSON.parse('{"a": 1, "b": 2, "c":3}'))
console.log(JSON.parse('{ "a": 1, "b": "string tem aspas duplas tb", "c":true, "d":{}, "e":[] }'))
