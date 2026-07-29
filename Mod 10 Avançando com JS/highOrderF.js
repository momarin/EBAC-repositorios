function aplicarOperacao(numero, operacao) {
  return operacao(numero);
}
const dobrar = (x) => x * 2;

console.log(aplicarOperacao(21, dobrar));

/* A função aplicarOperacao recebe um numero e uma função como argumentos, aplicando a função recebida ao numero para retornar resultado */

/* funçao aplicarOperacao vai receber um numero que ainda n temos + uma operacao que ainda não temos e retornar o valor da operacao qualquer, usando o número indicado.

sendo assim, definimos a função dobrar e o número 21. o resultado do colog será a função dobrar utilizando o número 21 como parametro*/
/* -------------------------------------------------------------- */
function multiplicador(fator) {
  return (numero) => numero * fator;
}

const triplicar = multiplicador(3);

console.log(triplicar(14));

/* definimos uma função chamada multiplicador que vai receber um fator (ainda nao definido) como argumento. Essa função retorna outra função (arrow f.) que recebe um número e o mutiplica pelo fator definido 

Então, definimos a função triplicar com o parametro 3, que é o fator, no caso, é o fator*/
/* -------------------------------------------------------------- */
