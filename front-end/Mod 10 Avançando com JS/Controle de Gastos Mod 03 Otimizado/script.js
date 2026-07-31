// array principal matriz de gastos com suas categorias e respectivos valores
const matrizGastos = [
  ["Alimentação", 0],
  ["Transporte", 0],
  ["Lazer", 0],
  ["Outros", 0],
  ["Total", 0],
];
/* ------------------------- funções utilitárias ------------------------- */
const obterElemento = (id) => document.getElementById(id); //obter elemento
const valorNegativo = (valor) => valor < 0;
const somaValor = (total, valor) => total + valor;
const limpandoCampos = () => (obterElemento("valor").value = "");
const formatandoMoeda = (valor) => valor.toFixed(2).replace(".", ",");

/* --------------------- obtendo valores do usuário --------------------- */
// obtendo valores do form
const obterValorInformado = () => parseFloat(obterElemento("valor").value); //obter valor
const obterCategoriaInformada = () => obterElemento("categoria").value;

// obtendo categoria da matriz
const obterCategoria = (matriz, nomeCategoria) =>
  matriz.find((item) => item[0] === nomeCategoria);

// atualizando valores da matriz
const atualizandoValorCategoria = (categoria, valor) =>
  (categoria[1] = somaValor(categoria[1], valor));

/* ----------------------- atualizando interface ----------------------- */
const atualizandoInterface = () => {
  matrizGastos.forEach(([nome, valor]) => {
    const elemento = obterElemento(nome);
    elemento.textContent = `${nome}: R$ ${formatandoMoeda(valor)}`;
  });
};

/* ----------------------- FUNÇÃO PRINCIPAL ----------------------- */
function adicionarGasto() {
  const valorInformado = obterValorInformado();
  const categoriaInformada = obterCategoriaInformada();

  if (valorNegativo(valorInformado)) {
    alert("Valor inválido. O valor não pode ser negativo.");
    return;
  }

  const categoria = obterCategoria(matrizGastos, categoriaInformada);
  const total = obterCategoria(matrizGastos, "Total");

  atualizandoValorCategoria(categoria, valorInformado);
  atualizandoValorCategoria(total, valorInformado);
  atualizandoInterface();
  limpandoCampos();
}
/* --------------------------------------------------------------------- */
/* Montando o código
1. Crie a função, aplique ao botão e o teste com um console.log (adicione "teste" à função)

2. o que ter na função
function adicionarGasto() {
  1.pegar valor informado
  2. pegar categoria informada
  3. impedir numeros negativos
  4. ao clicar em adicionar, atualizar valor de acordo com categoria
   4.1 criar variaveis para armazenar os valores de cada categoria
  5. atualizar interface
  6. limpar campos
}


*/
