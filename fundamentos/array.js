const valores = [7, 1, 'hahahaha', {}, null]

console.log(valores, valores[0], valores[2])

valores.push({id: 3}, 2, false, 'aaaaa');
console.log(valores);

console.log(valores.pop());

delete valores[2];

console.log(valores);

console.log(typeof valores);
