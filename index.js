var prompt = require('prompt-sync')();



let peso = prompt("Insira seu peso: ")
let altura = prompt("Insira sua altura: ")

function imc(peso,altura){
    imc = peso/(altura**2)
    return `O seu IMC é: ${imc}.`
}

console.log(imc(peso,altura))
