document.addEventListener('DOMContentLoaded', async function () {
    document.getElementById('btn-carga').addEventListener('click', cargarGaleria);
});

async function cargarGaleria() {
    const mensajeError = document.getElementsByClassName('mensaje-error')[0];
    mensajeError.style = {};
    try {
        const data = await cargarDatos();
        const imageContainer = document.getElementById('contenedor');
        data.imagenes.forEach(imagen => {
            const contenedorImagen = document.createElement('div');
            contenedorImagen.className = 'contenedor-imagen';

            const titulo = document.createElement('h3');
            titulo.innerText = imagen.titulo;

            const descripcion = document.createElement('p');
            descripcion.innerText = imagen.descripcion;

            const imgElemento = document.createElement('img');
            imgElemento.src = imagen.url;
            imgElemento.alt = imagen.alt;

            contenedorImagen.appendChild(imgElemento);
            contenedorImagen.appendChild(titulo);
            contenedorImagen.appendChild(descripcion);
            imageContainer.appendChild(contenedorImagen);
        });
    } catch(error) {
        mensajeError.style.display = 'block';
    }
}

function cargarDatos() {
    return new Promise((resolver, rechazar) => {
        fetch('imagenes.json')
            .then(response => {
                if (!response.ok) {
                    rechazar('Los datos no fueron cargados');
                }
                return response.json();
            })
            .then(data => {
                resolver(data);
            }).catch(error => {
                rechazar(error);
            });;
    });
}
