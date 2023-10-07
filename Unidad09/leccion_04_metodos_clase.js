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
  obtenerSaludo(hora) {
    if (hora === 'mañana') {
      return `Buenos días, mi nombre es ${this.obtenerNombreCompleto()}`;
    } else {
      return `Buenas tardes, mi nombre es ${this.obtenerNombreCompleto()}`;
    }
  }

  static metodoEstatico() {
    console.log(Persona.especie); // Salida: 'Homo sapiens'
    console.log(this.especie); // Salida: 'Homo sapiens'
    console.log(this.nombre); // Salida: undefined
  }
}

let david = new Persona('David', 'Quesada');
console.log(david.obtenerNombreCompleto()); // Salida: 'David Quesada'
console.log(david.obtenerSaludo('tarde'));
// Salida: 'Buenas tardes, mi nombre es David Quesada'

Persona.metodoEstatico();
