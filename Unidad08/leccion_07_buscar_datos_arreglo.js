const personas = [
  { nombre: 'eli' },
  { nombre: 'pedro' },
  { nombre: 'ana' },
  { nombre: 'eli' },
  { nombre: 'maria' }
];

let frutas = ['manzana', 'banana', 'pera', 'melón', 'banana'];

// Métodos indexOf y lastIndexOf: retorna el primer índice que coincida con la búsqueda
// retorna -1 si no se encuentra el elemento
let indiceBanana = frutas.indexOf('banana');
let ultimoIndiceBanana = frutas.lastIndexOf('banana');

console.log(indiceBanana); // Salida: 1
console.log(ultimoIndiceBanana); // Salida: 1

console.log(personas.indexOf({ nombre: 'eli' })); // Salida: -1
console.log(personas.lastIndexOf({ nombre: 'eli' })); // Salida: -1

console.log(personas.indexOf(personas[3])); // Salida: 3
console.log(personas.lastIndexOf(personas[1])); // Salida: 1

// Metodo includes: determina si el arreglo contiene el elemento buscado
// Devuelve un valor booleano
console.log(frutas.includes('melón')); // Salida: true
console.log(frutas.includes('sandía')); // Salida: false

console.log(personas.includes({ nombre: 'eli' })); // Salida: false
console.log(personas.includes(personas[3])); // Salida: true

// Método find: retorna el elemento que coincida con la búsqueda
console.log(frutas.find(fruta => fruta === 'melón')); // Salida: 'melón'
console.log(frutas.find(fruta => fruta === 'sandía')); // Salida: undefined

console.log(personas.find(persona => persona.nombre === 'eli')); // Salida: { nombre: 'eli' }

// Método findIndex: retorna el elemento que coincida con la búsqueda
console.log(frutas.findIndex(fruta => fruta === 'melón')); // Salida: 3
console.log(frutas.findIndex(fruta => fruta === 'sandía')); // Salida: -1

console.log(personas.findIndex(persona => persona.nombre === 'eli')); // Salida: 0

// Utilizando un loop:
let encontrada = false;
for (let i = 0; i < frutas.length; i++) {
  if (frutas[i] === 'melón') {
    encontrada = true;
    break;
  }
}
