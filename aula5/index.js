//              0123456789
let umaString= "Bruno S. O";
console.log(umaString.charAt(9)); //Selecionar um elemento do índice
// Concatenação abaixo:
console.log(umaString.concat(" É o meu nome."));
// OU
console.log(umaString+" É o meu nome :)");
// OU + (MELHOR)
console.log(`${umaString} É o meu nome :3`);
// Procurar pela palavra no índice
console.log (umaString.indexOf('Bruno'));

console.log("===");
console.log("===");
console.log("===");

let segundaString= "O Sabiá cantou para todos na fazenda."
console.log(segundaString);

console.log(segundaString.slice(-8));           // Buscar pela palavra partindo do final para o começo.
console.log(segundaString.length);              // Efetua a contagem da frase ou palavra.
console.log(segundaString.slice(29));           // Buscar pela palavra partindo do começo.

console.log(segundaString.toUpperCase());       // Frase toda em maiúscula.
console.log(segundaString.toLowerCase());       // Frase toda em minúscula.