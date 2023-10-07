const frutas = ['manzana', 'banana', 'pera'];
console.log(frutas);

const numeros = new Array(1, 2, 3, 4, 5);
console.log(numeros);

const resultado = Array.from('mira el cielo', 
(caracter) => caracter.toUpperCase());
console.log(resultado);

const colores = ['rojo', 'verde', ...['azul', 'amarillo']];
console.log(colores);
