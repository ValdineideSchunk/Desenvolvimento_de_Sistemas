"use strict"; //todas as variaveis a ser usadas devem ser declaradas
//esses são os primeiros comando em javascript

/*
abaixo teremos as declarações de variaveis
const
let
var
*/

/*na declaração de variaveis em javascript usando var é possivel
redeclarar a variavel*/
var nome = 'Ramon de holanda';
var nome = 'SENAI';

console.log(nome);

let curso = 'DDS'
// let curso = 'Banco de dados' //o uso do let impede a redeclaração de variaveis


let nota1 = 5;
//let nota = 11;

console.log(nota1);

//Tipos de variaveis do javascript

let texto = 'Aula de javascript';
console.log(texto);
let decimal =20.8;
console.log(decimal);
let booleano = true;
console.log(booleano);


let n1 = '10';
let n2 = 5;
console.log(n1 + n2);

n1 = parseInt(n1); // no javascript é possivel o reuso de variaveis
console.log(n1 + n2);

let dia = 'segunda';
let saudacao = 'boa noite';

console.log(dia+saudacao)
console.log(dia,saudacao)

