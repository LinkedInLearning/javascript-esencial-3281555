// spread = desparramar, dispersar
// Copiar un arreglo o un objeto:

let arregloOriginal = [1, 2, 3];
let copiaArreglo = [...arregloOriginal];
console.log(copiaArreglo);

let objetoOriginal = { a: 1, b: 2 };
let copiaObjeto = { ...objetoOriginal };
console.log(copiaObjeto);


// Unir arreglos
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let unidos = [...array1, ...array2];
console.log(unidos);

// Pasar argumentos a una función:
function suma(a, b, c) {
  return a + b + c;
}

let numeros = [1, 2, 3];
let resultado = suma(...numeros);
console.log(resultado);

// Convirtiendo un string en un arreglo de caracteres:
let str = 'Hola!, ';
let caracteres = [...str];
console.log(caracteres);



