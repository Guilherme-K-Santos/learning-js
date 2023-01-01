let num1 = 1
let num2 = 2

num1++ //pós-fixado (acrescenta uma unidade no num1)
console.log(num1)

--num1 //pré-fixado (decrementa uma unidade no num1)
console.log(num1)

console.log(++num1 === num2--) //true <-- péssima prática
console.log(num1 === num2) //false
