// do..while
let numeroAleatorio;

do {
  numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  console.log(`El número aleatorio en do..while es: ${numeroAleatorio}`);
} while (numeroAleatorio !== 5);

// Ejemplo while vs do..while
let cuenta = 0;

while (cuenta < 15) {
  console.log(`Cuenta actual en while: ${cuenta}`);
  cuenta++;
}

console.log('****************');

//cuenta = 0;

do {
  console.log(`Cuenta actual en do..while: ${cuenta}`);
  cuenta++;
} while (cuenta < 15);




