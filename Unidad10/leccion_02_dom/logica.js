/**
 * childNodes retorna nodos hijos que incluye nodos de elementos, 
 * nodos de texto y comentarios.
 * children retorna elementos hijos excepto texto y comentarios.
 */

const arbolNodos = document.childNodes;
const hijos = document.children;

console.log(arbolNodos);
console.log(hijos);

const arbolNodosBody = document.body.childNodes;
const hijoBody = document.body.children;

console.log(arbolNodosBody);
console.log(hijoBody);

// Cada elemento HTML tiene una lista de propiedades que 
// podemos cambiar con JavaScript:
const elementosBotones = document.getElementsByClassName('boton-redondo');
console.log(elementosBotones);

for (const boton of elementosBotones){
  console.log(boton);
  boton.style.border = 'black solid 2px';
}
