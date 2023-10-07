// Método push:
const frutas = ['manzana', 'banana', 'mango'];
frutas.push('piña');
console.log(frutas); // Salida: ['manzana', 'banana', 'mango', 'piña']

// Método unshift:
const colores = ['rojo', 'verde', 'amarillo'];
colores.unshift('azul');

console.log(colores); // Salida: ['azul', 'rojo', 'verde', 'amarillo']

// Método splice:
const numeros = [1, 2, 3, 4, 5];
numeros.splice(2, 0, 6);

console.log(numeros); // Salida: [1, 2, 6, 3, 4, 5]

// Operador spread:
const arregloOriginal = [1, 2, 3];
const nuevoArreglo = [...arregloOriginal, 4, 5];

console.log(nuevoArreglo); // Salida: [1, 2, 3, 4, 5]

// Método concat:
const autos = ['Nissan', 'Toyota'];
const masAutos = autos.concat('Chevy', 'BMW');

console.log(masAutos); // Salida: [ 'Nissan', 'Toyota', 'Chevy', 'BMW' ]

// Usando la propiedad length:
const letras = ['A', 'B', 'C'];
letras[letras.length] = 'D';

console.log(letras); // Salida: ['A', 'B', 'C', 'D']
