// Determinar si el puntero está dentro del círculo:
const circulo = document.getElementById('circulo');
const respuesta = document.getElementById('respuesta');

circulo.addEventListener('mouseenter', () => {
    respuesta.innerText = 'Sí';
});

circulo.addEventListener('mouseleave', () => {
    respuesta.innerText = 'No';
});
