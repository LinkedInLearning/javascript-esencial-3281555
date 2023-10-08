const botonCambiar = document.getElementsByClassName('boton-redondo')[0];
const botonReiniciar = document.getElementsByClassName('boton-redondo')[1];
const imagenes = document.getElementsByTagName('img');

function cambiarColorFondo() {
    const color = obtenerColorAleatorio();
    console.log(`Color generado: ${color}`);
    document.body.style.backgroundColor = color;
  }
  
  function obtenerColorAleatorio() {
    let letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function cambiarImagenes() {
    for(const imagen of imagenes){
      imagen.style.border = `${obtenerColorAleatorio()} solid 3px`;
    }
  }

botonCambiar.addEventListener('click', event => {
    cambiarColorFondo();
    cambiarImagenes();
});

botonReiniciar.addEventListener('click', event => {
  document.body.style = {};
  for(const imagen of imagenes){
    imagen.style = {};
  }
});
