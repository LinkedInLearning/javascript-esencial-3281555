// Ejemplo 1: bucle simple
let cuenta = 1;

while (cuenta <= 5) {
  console.log(`Cuenta: ${cuenta}`);
  cuenta++;
}

// Ejemplo 2: Usando una condición:
let numero = 10;

while (numero > 0) {
  console.log(`El número es: ${numero}`);
  numero -= 2;
}

// Ejemplo 3: Generando número aleatorio:
let numeroAleatorio;

while (numeroAleatorio !== 5) {
  numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  console.log(`El número aleatorio es: ${numeroAleatorio}`);
}
