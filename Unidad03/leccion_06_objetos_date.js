// Ejemplos de uso de objetos Date:

// Obtener la fecha y hora actual:
const fechaHoraActual = new Date();
console.log(fechaHoraActual);

// Objener información sobre la fecha:
const ahora = new Date();
const anno = ahora.getFullYear();
const mes = ahora.getMonth();
const dia = ahora.getDate();
const horas = ahora.getHours();
const minutos = ahora.getMinutes();
const segundos = ahora.getSeconds();

console.log(`Hoy es ${anno}-${mes + 1}-${dia} ${horas}:${minutos}:${segundos}`);

// Como crear un objeto con una fecha y hora específica:
// Año, mes, día, horas, minutos, segundos
const fechaEspecifica = new Date(2023, 8, 30, 12, 30, 0);
console.log(fechaEspecifica);
