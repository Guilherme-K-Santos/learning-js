{
    {
        {
            {
                var sera = 'será'
            }
        }
    }
}

function teste(){
    var local = 123
}
teste()
// console.log(local)
// ------------------------------------------

var numero = 1;

{
    var numero = 2
    console.log('dentro =', numero)
}

console.log('fora =', numero)
// ------------------------------------------
// var loop 1
for (var i = 0; i < 10; i++){
    console.log(i)
}

console.log('fora =', i)