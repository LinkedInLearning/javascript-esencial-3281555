// Método reverse: invierte el orden de los elementos:
const flores = ['amapola', 'geranio', 'girasol'];
flores.reverse();

console.log(flores); // Salida: ['girasol', 'geranio', 'amapola']

// Método sort: ordena los elementos en el arreglo
/**
 * La función callback debe retornar un valor dependiendo del caso:
 * - Un valor negativo si el primer parámetro es menor que el segundo
 * - Cero si son iguales
 * - Un valor positivo si el primer parámetro es mayor que el segundo
 * Si la función se omite, los elementos se ordenan ascendentemente
 * según el orden de caracteres ASCII.
 */
const numeros = [3, 1, 4, 1, 5, 9, 2, 6];
numeros.sort((a, b) => a - b); // Ordena los elementos en orden ascendente
console.log(numeros); // Salida: [1, 1, 2, 3, 4, 5, 6, 9]

const categorias = ['categoria3', 'categoria1', 'categoria2', 'categoria3', 'categoria2', 'categoria2', 'categoria1'];
categorias.sort((catA, catB) => {
  if (catA === 'categoria3') {
    return 1;
  } else if (catA === 'categoria1') {
    return -1;
  } else if (catA === 'categoria2' && catB === 'categoria3') {
    return -1;
  } else {
    return 1;
  }
});

console.log(categorias); // Salida: ['categoria1', 'categoria1', 'categoria2', 'categoria2', 'categoria2', 'categoria3', 'categoria3']

// Método map:
const numerosAlCuadrado = numeros.map(num => num ** 2);
console.log(numerosAlCuadrado); // Salida: [1,  1,  4,  9, 16, 25, 36, 81]

const personas = [{ nombre: 'eli' }, { nombre: 'pedro' }, { nombre: 'ana' }];
const nombres = personas.map(persona => persona.nombre.toUpperCase());
console.log(nombres); // Salida: [ 'ELI', 'PEDRO', 'ANA' ]
