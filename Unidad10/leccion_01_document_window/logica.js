const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

console.log(`Ancho de la ventana: ${windowWidth}px`);
console.log(`Alto de la ventana: ${windowHeight}px`);

document.getElementsByClassName('boton-redondo')[0]
.addEventListener('click', event => {
    let usuarioHaConfirmado = window.confirm('Estás seguro que quieres irte?');

    if (usuarioHaConfirmado) {
        window.alert('Nos vamos entonces!');
        window.location.href = 'https://www.linkedin.com/learning/';
    } else {
        window.alert('Nos quedamos aquí entonces!');
    }
});

