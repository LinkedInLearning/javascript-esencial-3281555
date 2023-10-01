function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let aleatorio = generarNumeroAleatorio(1, 10);
alert(aleatorio);
// Salida: Número aleatorio entre 1 and 10 (inclusivo)
