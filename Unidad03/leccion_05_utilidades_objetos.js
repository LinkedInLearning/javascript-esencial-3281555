
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Heredia"
};

// Object.keys():
let llaves = Object.keys(persona);
console.log(llaves); // Salida: [ 'nombre', 'edad', 'ciudad' ]

// Object.values():
const valores = Object.values(persona);
console.log(valores); // Salida: [ 'Juan', 30, 'Heredia' ]

// Object.entries():
const entradas = Object.entries(persona);
console.log(entradas);
// Salida: [ [ 'nombre', 'Juan' ], [ 'edad', 30 ], [ 'ciudad', 'Heredia' ] ]

// Object.assign():
const destino = { a: 1, b: 2 };
const origen = { b: 3, c: 4 };

const objetoFusionado = Object.assign({}, destino, origen);

console.log(objetoFusionado); // Salida: { a: 1, b: 3, c: 4 }
