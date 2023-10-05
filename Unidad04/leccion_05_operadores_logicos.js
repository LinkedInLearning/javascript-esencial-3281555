// Operadores lógicos:

const x = true;
const y = false;

// Expresiones lógicas:
// AND: doble ampersand
let resultado = x && y && true; // resultado es false

// OR: doble barra vertical
let resultado2 = x || y || false; // resultado2 es true

// NOT: signo de exclamación
let resultado3 = !x; // resultado3 es false
let resultado4 = !y; // resultado3 es true

// Podemos componer expresiones más largas y complejas:

const a = 5;
const b = 6;
const c = 7;

const resultadoExp1 = (a > c) && (b < c);
console.log(resultadoExp1);
// (a > c): false
// (b < c): true
// resultadoExp1 = false

const resultadoExp2 = (a > c) || (b < c);
console.log(resultadoExp2);
// (a > c): false
// (b < c): true
// resultadoExp2 = true

const resultadoExp3 = (a <= b) && ((a > c) || (b < c));
console.log(resultadoExp3);
// (a <= b): true
// (a > c): false
// (b < c): true
// ((a > c) || (b < c)): true
// resultadoExp3 = true

const resultadoExp4 = !(a <= b) && ((a > c) || (b < c));
console.log(resultadoExp4);
// !(a <= b): false
// (a > c): false
// (b < c): true
// ((a > c) || (b < c)): true
// resultadoExp3 = false
