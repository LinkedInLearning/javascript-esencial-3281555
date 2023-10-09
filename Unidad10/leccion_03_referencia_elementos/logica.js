
// Método getElementById:
let boton1 = document.getElementById('boton1');
console.log(boton1);

// Método getElementsByClassName:
let botones = document.getElementsByClassName('boton-redondo');
console.log(botones);

// Método getElementsByTagName:
let imagenes = document.getElementsByTagName('img');
console.log(imagenes);

// Método querySelector:
let boton2 = document.querySelector('#boton1');
console.log(boton2);

// Método querySelectorAll:
let botonesQuery = document.querySelectorAll('.boton-redondo');
console.log(botonesQuery);

// Método getElementsByName:
let robot3 = document.getElementsByName('robot3')[0];
console.log(robot3);

// Método getElementsByName:
let masCercano = robot3.closest('.galeria');
console.log(masCercano);

// Retornará null porque los botones no estan en la misma rama
const botonCercano = robot3.closest('.boton-redondo');
console.log(botonCercano);

// Método getElementsByName:
let elementoPadre = robot3.parentElement;
console.log(elementoPadre);
