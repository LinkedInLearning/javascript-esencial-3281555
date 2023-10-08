function hacerAlgoAsincrono() {
  return new Promise((resolver, rechazar) => {
    setTimeout(() => {
      const hecho = Math.random() < 0.5;
      if (hecho) {
        resolver('La operación fue un éxito!');
      } else {
        rechazar('La operación falló!');
      }
    }, 1000);
  });
}

hacerAlgoAsincrono()
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  });
