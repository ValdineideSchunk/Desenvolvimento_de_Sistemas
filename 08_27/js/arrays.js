'use strict';

let primeiroArray = new Array(5); //Declarando primeiro array
primeiroArray[0] = 5;
primeiroArray[1] = true;
primeiroArray[2] = 'maçã';
//Para acessar uma posição do array podemos passar a posição entre[]
//Por padrão o array inicia da posição 0

console.log(primeiroArray);

let segundoArray = []; //Criando um array vazio
segundoArray[10] = 8; // Posso atribuir a uma nova posição no array vazio
console.log(segundoArray);

let terceiroArray = [5,true,5.8,"pessoa"]; // Criando um array ja preenchido
console.log(terceiroArray);

let quartoArray = new Array(5,true,5.8,"animal");
console.log(quartoArray);

let matriz = [[0,1],[0,2],[true,false]];

console.log(matriz[0]);
console.log(matriz[2][1]);

let cores = ['amarelo', 'azul', 'branco'];

console.log(cores.toString()); //metodo toString converte para String separadas por virgulas
console.log(cores.join('|')); //método que permite converter o Array para String e permite escolher o separador
console.log(cores.concat(matriz));// O metodo concat permite a junção de um ou mais arrays

cores.push('preto','verde');// o metodo push envia novas posições para o final
console.log(cores);



let ultimacor = cores.pop();// o metodo pop() remove e exibe a ultima posição do array
console.log(ultimacor); 
console.log(cores);

let primeiraCor = cores.shift(); //shift remove e retorna a promeira posição de um array
console.log(primeiraCor); 
console.log(cores);

cores.unshift('roxo','turqueza','marrom')// o metodo unshift envia novas posições para o inicio
console.log(cores);

let fatia = cores.splice(1,2); // o metodo splice remove e retorna um pedaço do array
console.log(cores);
console.log(fatia);

let nome = 'João de Souza Bharboza'; //uma String é um Array de caracteres
console.log(nome[nome.length-1]); // length-1 exibe a ultima possição de um array

let arrayNome = nome.split(' ');
console.log(arrayNome);
let primeiroUltimo = arrayNome[0] + ' ' + arrayNome[arrayNome.length-1];
let alternativa = arrayNome.shift() + ' '+ arrayNome.pop();

console.log(primeiroUltimo);
console.log(alternativa);









