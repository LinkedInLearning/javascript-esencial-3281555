const frutas = ['manzana', 'banana', 'pera'];

frutas.forEach(fruta => { console.log(fruta); });

console.log('\n');

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

console.log('\n');

for (let i = frutas.length - 1; i >= 0; i--) {
  console.log(frutas[i]);
}

console.log('\n');

for (const fruta of frutas) {
  console.log(fruta);
}

console.log('\n');

for (const fruta in frutas) {
  console.log(fruta);
}
