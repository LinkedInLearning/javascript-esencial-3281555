class Persona {
  static especie = 'Homo sapiens';
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
console.log(david.nombre); // Salida: 'David'
console.log(david.apellido); // Salida: 'Quesada'
console.log(david.largoNombreCompleto); // Salida: 13
console.log(Persona.especie); // Salida: 'Homo sapiens'

