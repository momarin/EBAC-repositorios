// POO classes
export class Categoria {
  // Encapsulamento com campos privados
  #nome;
  #valor;
  constructor(nome) {
    this.#nome = nome;
    this.#valor = 0;
  }
  // Uso dos Getters
  get valor() {
    return this.#valor;
  }
  get nome() {
    return this.#nome;
  }
  // Manipulando State
  adicionarValor(valor) {
    this.#valor += parseFloat(valor);
  }
}
