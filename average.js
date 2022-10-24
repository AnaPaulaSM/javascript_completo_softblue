const prompt = require ("prompt-sync")(); //sintaxe pra trabalhar com um pacote na aplicação

/*const a = 10;
const b = 6;
const c = 20;*/

/*const a = parseInt(prompt("Digite o primeiro número:"));
const b = parseInt(prompt("Digite o segundo número:"));
const c = parseInt(prompt("Digite o terceiro número:"));*/

const a = Number(prompt("Digite o primeiro número:"));
const b = Number(prompt("Digite o segundo número:"));
const c = Number(prompt("Digite o terceiro número:"));

const media = (a + b + c) / 3;

console.log(`A média é: ${media}`);