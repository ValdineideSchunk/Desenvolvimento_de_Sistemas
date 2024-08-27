let altura = prompt('Digite sua altura:')
let peso = prompt('Digite seu peso:')
let imc = (parseFloat(peso) / (parseFloat(altura) * parseFloat(altura)));
console.log(imc);

if(imc < 15.5){
    console.log('Magreza');
}else if( imc < 24.9){
    console.log('Normal');
}else if( imc < 29.9){
    console.log(`seu IMC é de ${imc}  sendo considerado sobrepeso`);
}else if( imc < 39.9){
    console.log('Obesidade');
}else{
    console.log('Obesidade Grave');
}
