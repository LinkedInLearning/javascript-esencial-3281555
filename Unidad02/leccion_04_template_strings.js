let nombre = 'Mario';
let edad = 30;

let saludo = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(saludo);
// Salida: Hola, mi nombre es Mario y tengo 30 años.

// Multi linea:

let mensaje = `
  Los template strings
  nos permiten crear strings
  con varios cambios de línea.
  Esto nos facilita darle formato
  a un texto.`;
console.log(mensaje);
/*
Salida:
  Los template strings
  nos permiten crear strings
  con varios cambios de línea.
  Esto nos facilita darle formato
  a un texto.
*/

// Expresiones dentro de un template string:
const a = 10;
const b = 20;

let suma = `La suma de ${a} y ${b} es ${a + b}.`;
console.log(suma);
// Salida: La suma de 10 y 20 es 30.
