// Utilizando el índice:
const autos = ['Nissan', 'Toyota', 'Chevy', 'BMW'];
autos[1] = 'Ford';

console.log(autos); // Salida: ['Nissan', 'Ford', 'Chevy', 'BMW']

// Método splice:
const numeros = [1, 2, 3, 4, 5];
numeros.splice(2, 1, 6);

console.log(numeros); // Salida: [1, 2, 6, 4, 5]

// Método fill:
const letras = ['A', 'B', 'C', 'D', 'E', 'H', 'I'];
letras.fill('X', 2, 4);

console.log(letras); // Salida: ['A', 'B', 'X', 'X', 'E', 'H', 'I']
