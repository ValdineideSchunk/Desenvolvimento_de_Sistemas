'use strict';

let ambientes = [
    'VITRIA-3-SALA-3004',
    'VITRIA-5-LAB-5109',
    'VITRIA-3-LAB-5111'
];
for (let i = 0; i < ambientes.length; i++){
let pieces = ambientes[i].split('-');
pieces.splice(0,2);
let ambiente = pieces.join('-');

console.log(ambiente);
};