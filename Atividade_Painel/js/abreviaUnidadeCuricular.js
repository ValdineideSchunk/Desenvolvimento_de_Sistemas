'use strict';
function abreviaUnidadeCuricular(unidade) {
    // Remove os últimos dois elementos do array
    unidade.splice(-2, 2);
    // Abrevia o primeiro elemento (assumindo que é a parte importante para abreviação)
    let abrev = unidade[0].substring(0, 4); 
    // Retorna a abreviação e o último elemento do array
    return abrev + '. ' + unidade.pop();
}
export default abreviaUnidadeCuricular;