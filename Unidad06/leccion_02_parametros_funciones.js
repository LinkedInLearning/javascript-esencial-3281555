// Enviar parámetros por valor:
// Los datos primitivos siempre se pasan por valor.

function incrementar(numero) {
  numero++;
  return numero;
}

let num = 5;
let resultado = incrementar(num);

console.log(num);    // Salida: 5
console.log(resultado); // Salida: 6

// Paso de parámetros por referencia:
// Los datos no primitivos siempre se pasan por referencia.

function agregarArreglo(arr, valor) {
  arr.push(valor);
  return arr;
}

let miArreglo = [1, 2, 3];
let miArregloResultado = agregarArreglo(miArreglo, 4);

console.log(miArreglo); // Salida: [1, 2, 3, 4]
console.log(miArregloResultado); // Salida: [1, 2, 3, 4]
