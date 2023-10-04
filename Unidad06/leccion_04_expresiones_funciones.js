// Funciones declaradas como una expresión:
const saludo = function (nombre) {
  console.log(`Hola, ${nombre}!`);
}

saludo("Eli");

// Permite pasar la función como parámetro:

function generarSaludo(saludoFuncion) {
  const nombres = ['Eleanor', 'María', 'Gaby'];
  for (const nombre of nombres) {
    saludoFuncion(nombre);
  }
}

generarSaludo(saludo);
