'use strict';

//Abreviando ambiente
function abreviaAmbiente(ambienteArray) {
    // Remove os dois primeiros elementos do array
    ambienteArray.splice(0, 2);
    // Retorna o ambiente abreviado como string
    return ambienteArray.join('-');
}

export default abreviaAmbiente;