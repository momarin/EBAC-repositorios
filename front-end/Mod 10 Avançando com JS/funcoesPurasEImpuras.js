/* Função Pura ===================================================== */
function somar(a, b) {
  return a + b;
}
console.log(somar(21, 21)); // retorna 42
console.log(somar(21, 21)); // retorna 42

/* Função Impura ==================================================== */
let total = 21;

function adicionar(valor) {
  total += valor; //modifica variável externa
  return total;
}
console.log(adicionar(21)); //42
console.log(adicionar(21)); //63
