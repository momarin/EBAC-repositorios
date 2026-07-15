// ==== Objeto literal ====
const pessoa = { nome: "Carlos", idade: 20 };

/* utilizado principalmente quando fazemos estruturas que inalteráveis, com dados temporários, por ex. */
/* --------------------------------------------------------- */
//  ==== CLASSE ====
class Veiculo {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;

    // Atributo privado;
    this._ligado = false;
  }

  // métodos são declarados fora do construtor
  ligar() {
    this._ligado = true;
    console.log("O veículo está ligado.");
  }
  desligar() {
    this._ligado = false;
    console.log("O veículo está desligado.");
  }

  // acessando valor da prop privada com o GET
  get ligado() {
    return this._ligado;
  }
}

const veiculoNovo = new Veiculo("Honda", "Civic", 2025);
console.log(veiculoNovo);

veiculoNovo.ligar();
veiculoNovo.desligar();
console.log("O carro está ligado?", veiculoNovo.ligado);
/* --------------------------------------------------------- */
// ==== HERANÇA ====
// criando classe Moto que herda caracteristicas da classe Veiculo
class Moto extends Veiculo {
  constructor(marca, modelo, ano) {
    super(marca, modelo, ano);
  }
}

const motoNova = new Moto("Yahama", "MT", 2026);
console.log(motoNova);
motoNova.ligar();

// adicionando propriedades em classes filhas
class Carro extends Veiculo {
  constructor(marca, modelo, ano, numeroPortas) {
    super(marca, modelo, ano);
    this.numeroPortas = numeroPortas;
  }
  // metodo especializado da classe carro
  abrirPortas() {
    console.log("As portas do carro foram abertas.");
  }
}

const carro = new Carro("Chevrolet", "Ônix", 2024);
const moto = new Moto("Yahama", "MT", 2026);

carro.ligar();
carro.desligar();
carro.abrirPortas();
console.log("O carro está ligado?", carro.ligado);
/* Criando classe:
1. Criar a classe;
2. Criar o método construtor
 - nem todo atributo de uma classe precisa ter seu valor recebido pelo método construtor;
 - além disso, alguns atributos podem ser publicos e outros privados (encapsulamento); */
