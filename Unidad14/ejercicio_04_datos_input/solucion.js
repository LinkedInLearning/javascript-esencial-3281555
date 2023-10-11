// Mostrar la suma total de todos los números agregados al campo input:

const input = document.getElementById('cantidad');
const total = document.getElementById('total');
let contador = 0;

input.addEventListener('change', () => {
    contador += parseInt(input.value);
    total.innerText = contador;
});