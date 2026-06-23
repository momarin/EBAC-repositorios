/* FUNÇÃO CONSTRUTORA --> COMO ERA */
function Pessoa(nome, dataNascimento) {
  this.nome = nome;
  this.dataNascimento = dataNascimento;

  this.apresentar = function () {
    console.log(this);
  };
}
// usando
const pessoa1 = new Pessoa("Marina", "06/02/1992");
const pessoa2 = new Pessoa("Diego", "07/07/1989");
/* ------------------------------------------------------- */

/* CONSTRUTOR (classe ES6) */
class Pessoa {
  constructor(nome, dataNascimento) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
  }

  apresentar() {
    console.log(
      `Oi, meu nome é ${this.nome} e eu nasci em ${this.dataNascimento}`,
    );
  }
}
const pessoa1 = new Pessoa("Marina", "06/06/1992");
