document.addEventListener('DOMContentLoaded', function () {
    fetch('imagenes.json')
        .then(response => response.json())
        .then(data => {
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
        })
        .catch(error => console.error('Error:', error));
});
