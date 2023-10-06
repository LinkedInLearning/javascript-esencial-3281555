let frutas = ['manzana', 'banana', 'pera'];
console.log(frutas);

let numeros = new Array(1, 2, 3, 4, 5);
console.log(numeros);

let resultado = Array.from('mira el cielo', 
(caracter) => caracter.toUpperCase());
console.log(resultado);

let colores = ['rojo', 'verde', ...['azul', 'amarillo']];
console.log(colores);
