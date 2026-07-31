import { Categoria, ListaGastosPorCategoria } from "./classes.js";
import { valorNegativo, atualizandoInterface } from "./utils.js";
// POO
const gastosPorCategoria = new ListaGastosPorCategoria(
  new Categoria("Alimentação"),
  new Categoria("Transporte"),
  new Categoria("Lazer"),
  new Categoria("Outros"),
);

// Manipulando o DOM
const formulario = document.querySelector("form");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  // Acessando .elements através da prop name do html
  const valorInformado = formulario.elements.valor.value;
  const categoriaInformada = formulario.elements.categoria.value;

  if (valorNegativo(valorInformado)) {
    alert("Valor inválido. O valor não pode ser negativo.");
    return;
  }

  const categoria =
    gastosPorCategoria.obterCategoriaPorNome(categoriaInformada);
  categoria.adicionarValor(valorInformado);

  atualizandoInterface(gastosPorCategoria);
  formulario.reset();
});
