const prompt = require ("prompt-sync")(); //sintaxe pra trabalhar com um pacote na aplicação

const salary = Number(prompt("Salário atual:"));
const aumento = Number(prompt("Porcentagem de aumento:"));

const newSalary = salary + salary * (aumento / 100);

console.log(`O novo salário é: ${newSalary}`);