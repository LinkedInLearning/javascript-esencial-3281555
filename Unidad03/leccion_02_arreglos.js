// Arreglos:

const numeros = [1, 2, 3, 4, 5];
console.log(numeros[0]); // Salida: 1
console.log(numeros[5]); // Salida: undefined

const frutas = ["manzana", "banano", "piña", "naranja"];
console.log(frutas[3]); // Salida: naranja
frutas[2] = 'pera';
console.log(frutas[2]); // Salida: pera

let arregloMixto = [1, "manzana", true, null, { nombre: "Sara" }];
