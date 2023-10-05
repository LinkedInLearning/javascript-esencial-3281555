// Métodos trim:
const texto = "   Un texto con espacios en blanco   ";

console.log(texto.trim() + '***');
console.log(texto.trimStart() + '***');
console.log(texto.trimEnd() + '***');

// Métodos pad:
const textoNumero = "5";
console.log(textoNumero.padStart(4, "0"));
console.log(textoNumero.padEnd(4, "0"));

// charAt():
const textoPrueba = "Quiero vivir la vida aventurera...";
console.log(textoPrueba.charAt(5));
