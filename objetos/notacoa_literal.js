const a = 1
const b = 1
const c = 1

// antes
const obj1 = {a: a, b: b, c: c}

// depois
const obj2 = {a, b, c}
console.log(obj1, obj2)

// ----------------------------------
const nomeAttr = 'nota'
const valorAttr = 7.8

//antes
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

// depois
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    // antes
    funcao1: function() {

    },
    // depois
    funcao2() {

    }
}