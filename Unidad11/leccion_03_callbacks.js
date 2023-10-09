/**
 * Una función callback es una función que se pasa como argumento 
 * a otra función y se ejecuta después de completar esa función.
 */
function hacerAlgoAsincrono(callback) {
  setTimeout(function() {
    const resultado = Math.random();
    callback(resultado);
  }, 1000);
}

const procesarResultado = (datos) => {
  console.log(`El resultado obtenido: ${datos}`);
}

hacerAlgoAsincrono(procesarResultado);
