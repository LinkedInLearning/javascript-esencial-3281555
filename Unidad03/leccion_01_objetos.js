// Objetos en JavaScript

const persona = {
  nombre: "Carlos",
  apellido: "Monge",
  edad: 30,
  esAutorizado: true
};

console.log(persona.nombre); // Salida: Carlos

const nombreCompleto = persona.nombre + ' ' + persona.apellido;
persona.edad = 40;

// Objetos anidados:
const persona2 = {
  nombre: "Carlos",
  apellido: "Monge",
  edad: 30,
  esAutorizado: true,
  direccion: {
    calle: 14,
    avenida: 6,
    codigoPostal: 'D05TX45'
  }
};

console.log(persona2.direccion.calle); // Salida: 14
