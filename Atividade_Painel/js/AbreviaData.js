'use strict';
function abreviaData(dataHora) {
    const agora = new Date(dataHora);
    console.log(agora);
    return agora.toLocaleTimeString('pt-br', { hour: '2-digit', minute: '2-digit' });
}
export default abreviaData;