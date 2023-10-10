/**
 * El modo estricto en JavaScript es una forma
 * de habilitar un conjunto más estricto
 * de reglas para escribir código JavaScript.
 * Ayuda a detectar errores comunes y prevenir
 * ciertos tipos de errores.
 * Se introdujo en ECMAScript 5 (ES5) para proporcionar
 * un entorno de codificación más sólido y seguro.
 */

//'use strict';

// Previene asignar valores a variables no declaradas anteriormente:
variableSinDeclaracion = 17;

// Previeve la reasignación de valores globales:
NaN = 10;

//Previene parámetros duplicados en funciones:
function suma(x, x) {
    return x + x;
}

// No permite eliminar variables, funciones o argumentos de funciones
var x = 10;
delete x;
