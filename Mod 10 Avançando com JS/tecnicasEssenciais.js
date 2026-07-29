/* .map() =========================================================== */
// O map funciona como um for Each
const precos = [4.19, 7.32, 42.29];
const precosConvertidos = precos.map((preco) => preco * 5.74);
console.log(precosConvertidos); //[ 24.05..., 42.0168, 242.7446]

// .map() em arrays tipo STRING
const tarefas = [
  "Estudar",
  "Lavar Louça",
  "Varrer Casa",
  "Lavar Roupa",
  "Estender Roupa",
];
const listaTarefasHTML = tarefas.map((tarefa) => `<li>:${tarefa}</li>`);
console.log(listaTarefasHTML);
/* a saída será:
[
'<li>Estudar</li>'
'<li>lavar Louça</li>'
'<li>Varrer Casa</li>'
'<li>Lavar Roupa</li>'
'<li>Estender Roupa</li>'
]
*/
/* ------------------------------------------------------------------- */

/* .filter() ========================================================== */
const numeros = [2, 3, 7, 24, 42]; // Que numeros maior que 10?
const maiorQueDez = numeros.filter((n) => n > 10);
console.log(maiorQueDez); //[24, 42]
/* ------------------------------------------------------------------- */

/* .reduce() ======================================================== */
// PRIMEIRO, SEM REDUCE
const valores = [19, 20, 12];
let somaTotal = 0;

//somaTotal vai receber seu valor + cada elemento do array
valores.forEach((elemento) => {
  somaTotal = somaTotal + elemento;
});

console.log(somaTotal); //a soma dos 3 numeros do array valores --> 42
//COM REDUCE - Reduzindo um array a um unico valor
const array = [10, 20, 12];
const soma = array.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(soma); // 42
/* ------------------------------------------------------------------- */
/* .some() Algum atende à condição? ========================================= */
const numeros = [10, 20, 30, 42];
const maiorQue50 = numeros.some((n) => n > 50);
console.log(maiorQue50); // false
/* ------------------------------------------------------------------- */
/* .every() Todos atendem à condição? ======================================= */
const arrayNumeros = [10, 20, 30, 42];
const todosPositivos = arrayNumeros.every((n) => n > 0);
console.log(todosPositivos); //true
/* ------------------------------------------------------------------- */
/* REST OPERATOR ========================================= */
function somar(...numeros) {
  return numeros.reduce((total, numero) => total + numero, 0);
}
console.log(somar(10, 20, 12));

// sem Rest Operator
function multiplicar(a, b, c) {
  return a * b * c;
}
console.log(multiplicar(2, 3, 7)); // 42

// com Rest Operator
function multiplicarTudo(...numeros) {
  return numeros.reduce((produto, numero) => produto * numero, 1);
}
console.log(multiplicarTudo(2, 3, 7)); // 42
