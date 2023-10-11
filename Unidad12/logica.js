// Función se ejecuta cuando se hace click en alguno de los robots:
function clickEnRobot(numRobot){
  console.log(`El robot #${numRobot} fué presionado`);
}

// Función se ejecuta cuando se hace envía el formulario:
function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!patronEmail.test(email)){
        alert("El correo electrónico no es válido");
        return false;
    }
  
    if (nombre == "" || apellido == "" || email == "" || password == "") {
      alert("Todos los campos deben rellenarse");
      return false;
    }
  
    return true;
  }

// Ejemplos de diferentes tipos de eventos:
// La lista completa puedes encontrarla en este enlace:
// https://developer.mozilla.org/en-US/docs/Web/API/Event

document.addEventListener('scroll', evento => {
    console.log('Scroll en la página', evento);
});

window.addEventListener('resize', evento => {
  console.log(evento);
  console.log('Cambio de tamaño de la página', window.innerWidth, window.innerHeight);
});

document.getElementById("nombre").addEventListener('input', evento => {
    console.log(evento);
    console.log('Tecleo del nombre', evento.data);
});

// Ejemplo removeEventListener:
let contador = 0;
const escuchadorClickPagina = evento => {
  console.log('Click en la página', evento);
  contador++;
  if(contador > 5){
    document.removeEventListener('click', escuchadorClickPagina);
  }
}

document.addEventListener('click', escuchadorClickPagina);

// Ejemplo dispatchEvent
for(let i = 0; i < 3; i++){
  document.dispatchEvent(new Event('click'));
}
  