const prompt = require ("prompt-sync")(); //sintaxe pra trabalhar com um pacote na aplicação

const real = prompt("Valor em R$ => ");
const cotacao = prompt("Cotação em U$ => ");

const dolar = real / cotacao;

console.log(`O valor convertido é U$ ${dolar} dólares.`);