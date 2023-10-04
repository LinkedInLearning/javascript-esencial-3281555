// Ejemplo 1: Iteración simple
for (let i = 0; i < 5; i++) {
  console.log(`Iteración ${i}`);
}

// Ejemplo 2: Recorriendo un arreglo:
let numeros = [10, 20, 30, 40, 50];

for (let i = 0; i < numeros.length; i++) {
  console.log(`El elemento en el índice ${i} es: ${numeros[i]}`);
}

// Ejemplo 3: For anidados:
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}
