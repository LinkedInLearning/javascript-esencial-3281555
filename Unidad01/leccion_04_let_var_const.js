/* Ejemplo var */
function ejemploVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // Salida: 10
}

ejemploVar();

// Reasignación de var
var y = 5;
y = 7;
console.log(y); // Salida: 7

// Redeclaración de var:
var z = 2;
var z = 4;
console.log(z); // Salida: 4

/* Ejemplo let */
function ejemploLet() {
  if (true) {
    let x = 10;
  }
  console.log(x); // Error: x no esta definido
}

ejemploLet();

// se puede reasignar valores
let y = 5;
y = 7;
console.log(y); // Salida: 7

// no es posible re declarar una variable con el mismo nombre
let z = 2;
let z = 4; // Error: Identificador 'z' ya ha sido declarado

/* Ejemplo const */
function ejemploConst() {
  if (true) {
    const x = 10;
  }
  console.log(x); // Error: x no esta definido
}

ejemploConst();

// No se puede reasignar valores
const y = 5;
y = 7; // Error: Asignación a variable constante

// No es posible re declarar una constante con el mismo nombre
const z = 2;
const z = 4; // Error: Identificador 'z' ya ha sido declarado
