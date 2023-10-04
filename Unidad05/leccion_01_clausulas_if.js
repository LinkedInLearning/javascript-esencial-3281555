
// if:
let temperatura = 25;
if (temperatura > 30) {
  console.log("Hace calor hoy!");
}

// if-else:
let horaActual = 18;
if (horaActual < 12) {
  console.log("Buenos días!");
} else {
  console.log("Buenas tardes!");
}

// if-else if-else:
let nota = 75;
if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else {
  console.log("D");
}

// Anidados:
let estaLloviendo = true;
let haceFrio = false;

if (estaLloviendo) {
  if (haceFrio) {
    console.log("Traer un paraguas y un abrigo.");
  } else {
    console.log("Traer un paraguas.");
  }
} else {
  if (haceFrio) {
    console.log("Traer un abrigo.");
  } else {
    console.log("Disfruta tu día!");
  }
}



