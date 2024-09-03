'use strict';





let aulas = [
    {
        "id": 1300,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:00:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "EMP-NBM-03",
        "instrutor": "JOEL HERBERT BARBOSA SILVA",
        "unidade_curricular": "NOÇÕES BÁSICAS PARA MAQUINISTAS (CH: 219.0000)",
        "ambiente": "VTRIA-3-SALA-3004",
        "chave": null
    },
    {
        "id": 1280,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:00:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "UMO-MBMM-03",
        "instrutor": "THADEU VASCONCELOS DA SILVA GOMES",
        "unidade_curricular": "MECÂNICA BÁSICA DE MOTORES DE MOTOCICLETAS (CH: 100.0000)",
        "ambiente": "VTRIA-EXTER-EXTERNO",
        "chave": null
    },
    {
        "id": 1326,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:30:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "HTC-MEC-4-92",
        "instrutor": "AFONSO DE JESUS CORDEIRO",
        "unidade_curricular": "DESENVOLVIMENTO DE SISTEMAS DE AUTOMAÇÃO MECÂNICA (CH: 100.0000)",
        "ambiente": "VTRIA-3-LAB-3003",
        "chave": null
    }
]

function abreviaData(dataHora) {
    const agora = new Date(dataHora);
    return agora.toLocaleTimeString('pt-br', { hour: '2-digit', minute: '2-digit' });
}



let tabela = document.getElementById('tabela');
let axibir = '';
let isBlue = false; // Variável para alternar as cores

for (let aula of aulas) {

    //Formata hora de inicio e captura o retorno da função
    const horaMinutosSegundosInicio = abreviaData(aula.data_hora_inicio);

    //Formata hora de Fim e captura o retorno da função
    const horaMinutosSegundosFim = abreviaData(aula.data_hora_fim);

    //Abreviando nome dos instrutores
    let arrayNome = aula.instrutor.split(' ');
    let primeiroUltimo = arrayNome[0] + ' ' + arrayNome[arrayNome.length - 1];
    console.log(primeiroUltimo);

    // Abreviando o nome da unidade curicular
    let pieces = aula.unidade_curricular.split(' '); //split pega uma string e separa em arrays de string
    pieces.splice(-2, 2); // splice remove elemento de um array
    let abrev = aula.unidade_curricular.substring(0, 4); // retorna um pedaço de uma string

    //Abreviando ambiente
    let salas = aula.ambiente.split('-');
    salas.splice(0, 2);
    let ambiente = salas.join('-');

    // Alterna a cor da linha e a cor da letra
    let corLinha = isBlue ? 'style="background-color: #3d8ac9; color: #FFFFFF;"' : 'style="background-color: #FFFFFF; color: #000000;"';
    isBlue = !isBlue; // Inverte a cor para a próxima linha


    axibir += '<tr ' + corLinha + '>';
    axibir += '<td style="padding-left: 10px;">' + horaMinutosSegundosInicio + '</td>';
    axibir += '<td style="padding-left: 15px;">' + horaMinutosSegundosFim + '</td>';
    axibir += '<td style="padding-left: 90px;">' + aula.turma + '</td>';
    axibir += '<td style="padding-left: 100px;">' + primeiroUltimo + '</td>';
    axibir += '<td style="padding-left: 100x;">' + abrev + '. ' + pieces.pop() + '</td>';
    axibir += '<td style="padding-left: 20px;">' + ambiente + '</td>';
    axibir += '</tr>';
}

tabela.innerHTML += axibir;


