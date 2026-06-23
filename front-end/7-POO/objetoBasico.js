/* Um OBJETO possui propriedades e métodos e representam uma "coisa" */

const pessoa = {
  // propriedades
  nome: "Marina",
  idade: 34,
  profissao: "Dev",

  // métodos
  apresentar: function () {
    console.log(
      `Olá, meu nome é ${this.nome}, tenho ${this.idade} e sou uma ${this.profissao}`,
    );
  },
};

// usando os objetos
pessoa.apresentar(); //chamando método apresentar do obj pessoa

/* ------------------------------------------------------- */
const carro = {
  marca: "Fiat",
  modelo: "500",
  ano: 2018,

  ligar: function () {
    console.log("Ligando o carro.");
  },
  desligar: function () {
    console.log("Desligando o carro.");
  },
};
carro.ligar(); //chama o método ligar do carro

/* ------------------------------------------------------- */
// TRANSFORMANDO UMA MATRIZ EM UM OBJETO
const matrizGastos = [
  ["Alimentação", 0],
  ["Transporte", 0],
  ["Lazer", 0],
  ["Outros", 0],
  ["Total", 0],
];

// VIRA
const gasto = {
  //Propriedades
  categoria: "Alimentação",
  valor: 0,

  // método para adicionar valor ao gasto
  adicionarValor(valor) {
    this.valor += valor;
  },
};
gasto.adicionarValor(42);
const nomeCategoria = gasto.categoria;
/* ------------------------------------------------------- */
