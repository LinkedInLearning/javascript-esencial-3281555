// Destructuración de arreglos:

const numeros = [1, 2, 3, 4, 5];

const [primero, segundo, , cuarto] = numeros;

console.log(primero);  // Salida: 1
console.log(segundo); // Salida: 2
console.log(cuarto); // Salida: 4

// Destructuración de objetos:

const usuario = { nombre: "Andrés", edad: 30, esAdmin: true };

const { nombre, edad, esAdmin } = usuario;

console.log(nombre); // Salida: John
console.log(edad); // Salida: 30
console.log(esAdmin); // Salida: true
