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

const imagenes = document.getElementsByTagName('img');
cambiarImagenes();

// Usando recursión:

function recorrerElementos(elemento) {
  // Procesa el elemento actual
  console.log(elemento.tagName);

  // Recorre los elementos hijos de manera recursiva:
  for (let i = 0; i < elemento.children.length; i++) {
    recorrerElementos(elemento.children[i]);
  }
}

// Empieza el recorrido desde el elemento raíz (document.body)
recorrerElementos(document.body);
