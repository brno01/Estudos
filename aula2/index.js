/* 
Bruno Santos de Oliveira tem 21 anos, pesa 77 kg,
tem 1.78 m de altura e seu IMC é 24.302487059714682

O ano de nascimento do Bruno é: 2001
*/
const nome = "Bruno"; // String
const nomeCompleto = "Bruno Santos de Oliveira";
const idade = 21; // Number
const peso = 77;
const altura = 1.78; // Number(float)
let imc = peso / (altura * altura);
let anoNascimento = 2022 - idade;
const logico = true || false; // Boolean - true or false (verdadeiro ou falso) - 1 or 0(Lógica binária)

console.log(`${nomeCompleto} tem ${idade} anos, pesa ${peso} kg,`);
console.log(`tem ${altura}m de altura e seu IMC é ${imc}.`);
console.log();
console.log(`O ano de nascimento do ${nome} é: ${anoNascimento}`);

const a = [1, 2];
const b = a;
console.log(a, b);

b.push(3);
console.log(a, b);