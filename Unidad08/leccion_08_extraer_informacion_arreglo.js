const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Método some():
const tieneNumerosPares = numeros.some(num => num % 2 === 0);
console.log(tieneNumerosPares); // Salida true

// Método every():
const todosSonPares = numeros.every(num => num % 2 === 0);
console.log(todosSonPares); // Salida false

// Método reduce():
const suma = numeros.reduce((acumulador, valorActual) => {
  return acumulador + valorActual;
}, 0);

console.log(suma); // Salida: 55

const strings = ['Hola', ', ', 'JavaScript', '!'];

const stringConcatenado = strings.reduce((acumulador, valorActual) => {
  return acumulador + valorActual;
}, '');

console.log(stringConcatenado); // Salida: "Hola, JavaScript!"
