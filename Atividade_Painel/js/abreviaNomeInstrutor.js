'use strict';

function abreviaNomeInstrutor(instrutor) {
    // Abreviando nome dos instrutores
    let arrayNome = instrutor.split(' ');
    let primeiroUltimo = arrayNome[0] + ' ' + arrayNome[arrayNome.length - 1];
    return primeiroUltimo; // Retorna o valor abreviado
}  
    
export default abreviaNomeInstrutor;