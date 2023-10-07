class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(`${this.nombre} hace ruido.`);
  }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre);
    this.raza = raza;
  }

  ladra() {
    console.log(`${this.nombre} ladras muy fuerte!`);
  }
}

let miPerro = new Perro('Fido', 'Labrador');
miPerro.hablar(); // Salida: 'Fido hace ruido.'
miPerro.ladra(); // Salida: 'Fido ladras muy fuerte!'
