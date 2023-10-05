// "this" hace referencia al contexto donde se invoca:

// Ejemplo 1: hace referencia al contexto global.
// En el navegador hace referencia al objeto window.
console.log(this);

//Ejemplo 2: En un objeto, hace referencia al objeto:
const miObjeto = {
  mensaje: "Mensaje del Objeto",
  funcionRegular: function () {
    console.log(this.mensaje); // Salida: Mensaje del Objeto
  },
};

miObjeto.funcionRegular(); // Salida: Mensaje del Objeto

//Ejemplo 3: En una función, hace referencia al contexto global.
function probarThis() {
  console.log(this);
  const probarThisFlecha = () => {
    // también hace referencia al contexto global.
    console.log(this);
  }
  probarThisFlecha();
}

probarThis();

// Ejemplo 4: diferencia entre función regular y una función flecha:
const unObjeto = {
  mensaje: "Mensaje del Objeto",
  funcionRegular: function () {
    console.log(this.mensaje);
  },
  funcionFlecha: () => {
    console.log(this.mensaje);
  }
};

unObjeto.funcionRegular(); // Salida: Mensaje del Objeto
unObjeto.funcionFlecha();   // Salida: undefined
