let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global)
const obj = {}

comparaComThis = comparaComThis.bind(obj) // travou o this no obj
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(obj)