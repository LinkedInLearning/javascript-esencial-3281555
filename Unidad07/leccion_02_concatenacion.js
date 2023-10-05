const string1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ";
const string2 = "Maecenas pretium tempus nisi non lacinia";

// Ejemplo 1:
const resultado1 = string1 + string2;
console.log(resultado1);

// Ejemplo 2:
const resultado2 = `${string1}${string2}`;
console.log(resultado2);

// Ejemplo 3:
const resultado3 = string1.concat(string2);
console.log(resultado3);

// Ejemplo 4:
const arr = [string1, string2];
const resultado4 = arr.join();
console.log(resultado4);
