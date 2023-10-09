function mostrarTiempo() {
  let ahora = new Date();
  let horas = ahora.getHours();
  let minutos = ahora.getMinutes();
  let segundos = ahora.getSeconds();
  
  console.log(`${horas}:${minutos}:${segundos}`);
}

// setInterval: ejecuta una función cada vez que el tiempo definido 
// en el segundo parámetro haya pasado.
const idSetInterval = setInterval(mostrarTiempo, 1000); 
// Se actualiza cada segundo

// setTimeout: ejecuta una función luego que el tiempo definido
// en el segundo parámetro haya pasado.
const idSetTimeout = setTimeout(() => {
  // clearInterval: elimina el interval con el id que se pase como parámetro.
 clearInterval(idSetInterval);
}, 5000);

setTimeout(() => {
  // clearTimeout: elimina el timeout con el id que se pase como parámetro.
  clearTimeout(idSetTimeout);
 }, 2000);
