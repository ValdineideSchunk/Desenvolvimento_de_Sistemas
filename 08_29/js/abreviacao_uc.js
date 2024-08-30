'use strict';

let usc = [
    'NOÇÕES BASICAS PARA MAQUINISTAS (CH: 219.00)',
    'BANCO DE DADOS CH: 120.00'
]

for (let i = 0; i < usc.length; i++){
    let pieces = usc[i].split(' '); //split pega uma string e separa em arrays de string
    pieces.splice(-2,2); // splice remove elemento de um array

    let abrev = pieces[0].substring(0,4); // retorna um pedaço de uma string
    console.log(abrev+'. '+pieces.pop());
}