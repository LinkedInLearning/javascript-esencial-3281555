class Persona {
  constructor(nombreParametro, apellidoParametro) {
    this.nombre = nombreParametro;
    this.apellido = apellidoParametro;
  }

  obtenerNombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }
}

let samuel = new Persona('Samuel', 'Reyes');
console.log(samuel.nombre); // Salida: 'Samuel'
console.log(samuel.obtenerNombreCompleto()); // Salida: 'Samuel Reyes'

let david = new Persona('David', 'Quesada');
console.log(david.nombre); // Salida: 'David'
console.log(david.obtenerNombreCompleto()); // Salida: 'David Quesada'

