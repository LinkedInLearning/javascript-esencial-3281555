class Persona {
  constructor(nombreParametro, apellidoParametro) {
    this.nombre = nombreParametro;
    this.apellido = apellidoParametro;
    this.largoNombreCompleto = this.obtenerNombreCompleto().length;
  }

  obtenerNombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }
}

let david = new Persona('David', 'Quesada');
console.log(david.largoNombreCompleto); // Salida: 13
console.log(david.obtenerNombreCompleto()); // Salida: 'David Quesada'

// Clase sin constructor:
class Auto {
  marca = undefined;
};
const auto = new Auto();
console.log(auto); // Salida: Auto { marca: undefined }
auto.marca = 'Ford';
