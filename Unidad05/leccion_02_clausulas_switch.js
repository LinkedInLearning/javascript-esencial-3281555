// Declaraciones switch:
//Ejemplo 1:
let diaSemana = 3;
let nombreDia;

switch (diaSemana) {
  case 1:
    nombreDia = "Domingo";
    break;
  case 2:
    nombreDia = "Lunes";
    break;
  case 3:
    nombreDia = "Martes";
    break;
  case 4:
    nombreDia = "Miércoles";
    break;
  case 5:
    nombreDia = "Jueves";
    break;
  case 6:
    nombreDia = "Viernes";
    break;
  case 7:
    nombreDia = "Sábado";
    break;
}

console.log(`Hoy es ${nombreDia}.`);

//Ejemplo 2:
let fruta = "manzana";
let color;

switch (fruta) {
  case "manzana":
  case "cereza":
    color = "rojo";
    break;
  case "banana":
    color = "amarillo";
    break;
  case "uva":
    color = "morado";
    break;
  default:
    color = "desconocido";
}

console.log(`El color de la ${fruta} es ${color}.`);
