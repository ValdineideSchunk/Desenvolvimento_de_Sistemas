'use strict';

let html = document.getElementById('saudacao');

console.log(html);

// DOM (Document Object Model) é a estrutura da página HTML.
//O DOM permite que linguagens interaja, com a pagina

html.innerHTML = '<h1>Olá mundo</h1>';


let alunos = [
    { nome: 'Gabriel', sobrenome: 'Resende Pereira' },
    { nome: 'Giampaolo', sobrenome: 'Resende Pereira' },
    { nome: 'Gustavo', sobrenome: 'Dias Santos' }
]

let tabela = document.getElementById('tabela');

let axibir = '';
for (let aluno of alunos) {
    axibir += '<tr>'
    axibir += '<td>' + aluno.nome + '</td>'
    axibir += '<td>' + aluno.sobrenome + '</td>'
    axibir += '</tr>'
}

tabela.innerHTML += axibir;

console.log(tabela);
