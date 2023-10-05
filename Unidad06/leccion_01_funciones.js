// Ejemplo de una función:

function sumarNumeros(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

console.log(sumarNumeros(5, 3)); // Salida: 8

// Llamado de una función dentro de un bucle for:

function raizCuadrada(numero) {
  return numero * numero;
}

for (let i = 1; i <= 5; i++) {
  let resultado = raizCuadrada(i);
  console.log(`La raíz cuadrada de ${i} es ${resultado}`);
}

// Llamar una función dentro de otra función:

function multiplicarNumeros(num1, num2) {
  return num1 * num2;
}

function ejecutarOperaciones(num1, num2) {
  let suma = sumarNumeros(num1, num2);
  let producto = multiplicarNumeros(num1, num2);

  console.log(`Suma: ${suma}`);
  console.log(`Producto: ${producto}`);
}

ejecutarOperaciones(5, 3);
