// Es un valor único e inmutable:
const miSimbolo = Symbol();
console.log(typeof miSimbolo); // Salida: symbol

// Con descripción:
const miSimboloConDescripcion = Symbol('algún nombre o descripción');
console.log(miSimboloConDescripcion.toString());
// Output: Symbol(algún nombre o descripción)

// Uso como llave única:
const llaveUnica = Symbol('llave única');

const unObjeto = {
  [llaveUnica]: 'Valor asociado a la llave única'
};

console.log(unObjeto[llaveUnica]); // Salida: Valor asociado a la llave única

