// Método pop:
const frutas = ['manzana', 'banana', 'mango'];
const frutaEliminada = frutas.pop();

console.log(frutaEliminada); // Salida: 'mango'
console.log(frutas); // Salida: ['manzana', 'banana']

// Método shift:
const colores = ['rojo', 'verde', 'azul'];
const colorEliminado = colores.shift();

console.log(colorEliminado); // Salida: 'rojo'
console.log(colores); // Salida: ['verde', 'azul']

// Método splice:
const numeros = [1, 2, 3, 4, 5];
const numerosEliminado = numeros.splice(2, 2);

console.log(numerosEliminado); // Salida: [3, 4]
console.log(numeros); // Salida: [1, 2, 5]

// Método slice:
const autos = ['Nissan', 'Toyota', 'Chevy', 'BMW'];
const autosEliminados = autos.slice(1, 3);

console.log(autosEliminados); // Salida: [ 'Toyota', 'Chevy' ]
console.log(autos); // Salida: ['Nissan', 'Toyota', 'Chevy', 'BMW']
