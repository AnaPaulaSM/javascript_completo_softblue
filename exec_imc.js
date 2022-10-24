const prompt = require ("prompt-sync")(); //sintaxe pra trabalhar com um pacote na aplicação

const peso = Number(prompt("Digite o seu peso: "));
const altura = Number(prompt("Digite a sua altura: "));

//const imc = peso / (altura * altura);

const imc = peso / Math.pow(altura, 2);
console.log(`O seu IMC é: ${imc}`);