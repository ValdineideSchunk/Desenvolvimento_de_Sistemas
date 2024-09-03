'use strict';

//criando função para atualiza saldação
function atualizaSaudacao() {
    //Obtendo data de agora
    const agora = new Date();
    //console.log(agora.getDay());

    // Obtendo o numero da semana iniciando de 0 até 6
    const dia = agora.getDay();

    //Criando um Array de dias da semana aquivalente
    const dias = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexata-Feira', 'Sabado',]
    //console.log(dias[dia]);

    //Obtendo hoas em valor inteiro
    const hora = agora.getHours();

    //declarando variavel de cumprimento
    let cumprimento = '';

    // Verificação da saudaçãi adequada
    if (hora < 6) {
        cumprimento = ' Boa Madrugada';
    } else if (hora < 12) {
        cumprimento = ' Bom Dia';
    } else if (hora < 18) {
        cumprimento = ' Boa Tarde';
    } else {
        cumprimento = ' Boa Noite';
    }

    //Selecionando elemento 
    const saudacao = document.getElementById('saudacao');

    //Adicionando no documento html
    saudacao.innerHTML = `${dias[dia]} - ${cumprimento}`; // outra forma de concatenar informações

    //chamando função de forma recursiva
    setTimeout(atualizaSaudacao, 1000);
}
atualizaSaudacao();