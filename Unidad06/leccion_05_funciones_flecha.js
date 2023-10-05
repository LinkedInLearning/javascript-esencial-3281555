// Función flecha con valor de retorno implícito:
let sumar = (x, y) => x + y;

let resultado = sumar(5, 3);
console.log(resultado); // Salida: 8

// Función flecha sin parámetros:
let decirHola = () => {
  console.log("Hola!");
};

decirHola(); // Salida: Hola!

// Función flecha con un parámetro:
let raizCuadrada = x => x * x;

let resultado2 = raizCuadrada(9);
console.log(resultado2); // Salida: 81

// Función flecha con objeto literal:
let crearPersona = (nombre, edad) => ({ nombre: nombre, edad: edad });

let persona = crearPersona("Eleanor", 16);
console.log(persona); // Salida: { nombre: 'Eleanor', edad: 16 }
