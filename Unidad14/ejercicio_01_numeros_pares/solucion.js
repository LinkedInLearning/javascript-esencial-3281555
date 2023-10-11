// Contar cuántos números pares hay entre uno y 100:
let contador = 0;
for(let num = 1; num <= 100; num++){
    const esPar = num % 2 === 0;
    if(esPar){
        contador += 1;
    }
}

console.log(contador);
