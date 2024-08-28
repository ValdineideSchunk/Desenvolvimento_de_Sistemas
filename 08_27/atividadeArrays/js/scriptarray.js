
let nomes = [
    'Laha Souza Goiabinha','Matesu Barbosa Santana', 'Igor Stem dos SAntos','Luis Felipe Xavier Bizio',
    'Vitor Ribeiro Fonseca', 'Valdineide Schunk', 'maria'];



    for(let i = 0; i < nomes.length; i++){
        let arrayNome = nomes[i].split(' ');
        if(arrayNome.length-1 > 0){
        let primeiroUltimo = arrayNome[0] + ' ' + arrayNome[arrayNome.length-1];
        console.log(primeiroUltimo);
       }else {
        let primeiroUltimo = arrayNome[0];
        console.log(primeiroUltimo);
       };
    };


