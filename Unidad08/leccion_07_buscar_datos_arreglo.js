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

console.log(indiceBanana); // Output: 1
console.log(ultimoIndiceBanana); // Output: 1

console.log(personas.indexOf({ nombre: 'eli' })); // Output: -1
console.log(personas.lastIndexOf({ nombre: 'eli' })); // Output: -1

console.log(personas.indexOf(personas[3])); // Output: 3
console.log(personas.lastIndexOf(personas[1])); // Output: 1

// Metodo includes: determina si el arreglo contiene el elemento buscado
// Devuelve un valor booleano
console.log(frutas.includes('melón')); // Output: true
console.log(frutas.includes('sandía')); // Output: false

console.log(personas.includes({ nombre: 'eli' })); // Output: false
console.log(personas.includes(personas[3])); // Output: true

// Método find: retorna el elemento que coincida con la búsqueda
console.log(frutas.find(fruta => fruta === 'melón')); // Output: 'melón'
console.log(frutas.find(fruta => fruta === 'sandía')); // Output: undefined

console.log(personas.find(persona => persona.nombre === 'eli')); // Output: { nombre: 'eli' }

// Método findIndex: retorna el elemento que coincida con la búsqueda
console.log(frutas.findIndex(fruta => fruta === 'melón')); // Output: 3
console.log(frutas.findIndex(fruta => fruta === 'sandía')); // Output: -1

console.log(personas.findIndex(persona => persona.nombre === 'eli')); // Output: 0

// Utilizando un loop:
let encontrada = false;
for (let i = 0; i < frutas.length; i++) {
  if (frutas[i] === 'melón') {
    encontrada = true;
    break;
  }
}
