// Convirtiendo strings a números:
const strNumero = "123";
const numero = parseInt(strNumero);
const numero2 = +strNumero;

console.log(typeof numero); // Salida: number
console.log(typeof numero2); // Salida: number

const strFloat = "3.14";
const numeroDecimal = parseFloat(strFloat);

console.log(numeroDecimal); // Salida: 3.14
console.log(typeof numeroDecimal); // Salida: number

// Convirtiendo números a strings:
const valorNumeral = 789;
const numeroString = valorNumeral.toString();
const numeroString2 = `${valorNumeral}`;

console.log(numeroString); // Salida: "789"
console.log(numeroString2); // Salida: "789"



