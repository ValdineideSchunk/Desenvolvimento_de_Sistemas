'use strict';
//Criando função para atualizar o relogio
function atualizaRelogio() {
    //Attribuindo a uma variavel o elemeto com id relogio
    const relogio = document.getElementById('relogio');
    
    // Obtemdo data-hora de agora
    const agora = new Date();
    //console.log(agora);

    //Obtendo hora, minutos e segundos da hora atual
    const horaMinutosSegundos = agora.toLocaleTimeString('pt-br', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    
    //adicionando a pagina o relógio
    relogio.innerHTML = horaMinutosSegundos;

    //aplicando recursividade para o relógio atualizando a cada ,ilisegundos(1 segundo)
    setTimeout(atualizaRelogio, 1000);
}

atualizaRelogio();