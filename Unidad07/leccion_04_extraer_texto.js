const texto = `Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Maecenas pretium tempus nisi non lacinia`;

// Toma el texto desde el índice 0 al índice 5:
const lorem = texto.substring(0, 5);
console.log(lorem);

// Extrae los 10 primeros caracteres:
const primerasLetras = texto.slice(undefined, 10);
console.log(primerasLetras);

// Toma todo el string, excepto los 10 primeros caracteres:
const ignoraPrimerasLetras = texto.slice(10);
console.log(ignoraPrimerasLetras);

// Toma del carácter 5 al carácter 10:
const ignoraPrimerasLetras2 = texto.slice(5, 10);
console.log(ignoraPrimerasLetras2);

