function obtenerUsuario() {
  return new Promise((resolver) => {
    setTimeout(() => {
      resolver({ nombre: 'Carlos Monge', edad: 40 });
    }, 1000);
  });
}

async function obtenerInformacionUsuario() {
  try {
    const usuario = await obtenerUsuario();
    console.log(`Nombre: ${usuario.nombre}, Age: ${usuario.edad}`);
  } catch (error) {
    console.error('Hubo un error:', error);
  }
}

obtenerInformacionUsuario();
