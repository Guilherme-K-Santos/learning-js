const peso1 = 1;
const peso2 = Number('2.2');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger('a'));

const ava1 = 9.867;
const ava2 = 6.161;

const total = ava1 + peso1 + ava2 + peso2;
const media = total / (peso1 + peso2)

console.log(media.toFixed(3));
console.log(media.toString(16));
console.log(typeof media);
