// Ejemplo 1:
function saludo() {
  let mensaje = "Hola!";
  console.log(mensaje);
}

saludo();
console.log(mensaje); // Error: saludo no esta definido

// Ejemplo 2:
function funcionExterna() {
  let variableExterna = "Variable externa";

  function functionInterna() {
    console.log(variableExterna);
    let variableInterna = "Variable interna";
    console.log(variableInterna);
  }

  functionInterna();
  console.log(variableInterna); // Error: variableInterna no esta definida
}

funcionExterna();

// Ejemplo 3:
let mensaje = "Mensaje global";

function decirMensaje() {
  let mensaje = "Mensaje local";
  console.log(mensaje);// Salida: Mensaje local
}

decirMensaje();
console.log(mensaje);// Salida: Mensaje global


