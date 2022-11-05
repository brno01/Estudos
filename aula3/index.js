const space = "***";
/** Aritiméticos:
 * + Adição / Concatenação
 * - Subtração, * Multiplicação, / Divisão;
 * ** Potenciação e % Resto da divisão
 * ++ Incremento e -- Decremento
 */

/**
 * Precedência:
 * ()
 * **
 * * / %
 * + -
 * ++ --
 */

const num1 = 5;
const num2 = 10;
const num3 = 2;
console.log(num1 + num2 * num3); //                               Resultado: 25
console.log((num1 + num2) * num3); //                             Resultado: 30  (Prioridade de operadores)
console.log(space);

let contador = 8;
contador++; // 2
contador++; // 3
contador++; // 4
console.log(++contador); //                                       Resultado: 12  (Incremento)
console.log(space);

let bytes = 8;
bytes = bytes **= 1; //                                           Resultado: 8   (Potenciação)
console.log(bytes);
console.log(space);
