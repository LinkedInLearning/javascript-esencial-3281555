// Método: createElement
const elementoBoton = document.createElement('button');
elementoBoton.className = 'boton-redondo';
elementoBoton.innerText = 'Botón agregado usando JavaScript!'
document.body.append(elementoBoton);

// Método: createDocumentFragment
const imagenesUrls = [
  './imagenes/robot1.png',
  './imagenes/robot2.png',
  './imagenes/robot3.png'
];

const galeria = document.getElementsByClassName('galeria')[0];
const fragmento = document.createDocumentFragment();

for(let i = 0; i < imagenesUrls.length; i++){
  const imgElement = document.createElement('img');
  imgElement.src = imagenesUrls[i];
  imgElement.ariaLabel = `robot_${i}`;
  fragmento.appendChild(imgElement);
}

galeria.append(fragmento);

// Método: cloneNode
// 'true' incluye nodos hijos
// 'false' crea una copia superficial
const galeriaCopia = galeria.cloneNode(true);
document.body.append(galeriaCopia);

// Método: createTextNode
const nodoTexto = document.createTextNode('Algún texto aquí.');
document.body.append(nodoTexto);

/** Maneras no seguras: */
// Si utilizas algunos de estos métodos, debes sanitizar el string html.

// Método: innerHTML
document.getElementById('contenedor').innerHTML = '<p>Esta no es una manera segura de agregar elementos HTML.</p>';

// Método: insertAdjacentHTML
document.getElementById('contenedor').insertAdjacentHTML('beforeend', '<p>Esta tampoco es una manera segura de agregar elementos HTML.</p>');

// Método: outerHTML
document.getElementById('contenedor').outerHTML = '<div>Tampoco es seguro usar este método.</div>';
