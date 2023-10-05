// Verificando si un string contiene un patrón:
const patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const email1 = "usuario@example.com";
const email2 = "email.invalido@com";
const email3 = "otro.usuario@sub.domain.co.uk";

console.log(patronEmail.test(email1)); // Salida: true
console.log(patronEmail.test(email2)); // Salida: false
console.log(patronEmail.test(email3)); // Salida: true

// Reemplazando texto:
const poema = `
Quiero vivir la vida aventurera
de los errantes pájaros marinos;
no tener, para ir a otra ribera,
la prosaica visión de los caminos.`;

const palabraAReemplazar = "pájaros";
const reemplazo = "aves";

const regex = new RegExp(palabraAReemplazar, "gi");
const resultado = poema.replace(regex, reemplazo);

console.log(resultado);

/**
Salida:
Quiero vivir la vida aventurera
de los errantes aves marinos;
no tener, para ir a otra ribera,
la prosaica visión de los caminos.
 */
