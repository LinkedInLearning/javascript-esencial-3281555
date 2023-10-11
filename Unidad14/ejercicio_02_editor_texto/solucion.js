const poema = `
Vuelo Supremo

Quiero vivir la vida aventurera
de los errantes pájaros marinos;
no tener, para ir a otra ribera,
la prosaica visión de los caminos.

Poder volar cuando la tarde muera
entre fugaces lampos ambarinos,
y oponer a los raudos torbellinos
el ala fuerte y la mirada fiera.

Huir de todo lo que sea humano;
embriagarme de azul… Ser soberano
de dos inmensidades: mar y cielo;

y cuando sienta el corazón cansado
morir sobre un peñón abandonado
con las alas abiertas para el vuelo.
-- Julián Marchena
`;

// Crear una función que busca y reemplaza partes de un texto:
function reemplazarTexto(textoBuscar, reemplazo, texto){
    const regex = new RegExp(textoBuscar, 'gi');
    return texto.replace(regex, reemplazo);
}

console.log(reemplazarTexto('no', 'NO', poema));
