// classe ContaBancaria manipula saldo da conta

// classe CaixaEletronico é responsável pela interface do usuário, obtendo e exibindo valores

class ContaBancaria {
  //   atribuindo privacidade à prop saldo
  #saldo;
  constructor() {
    this.#saldo = 0;
  }

  // 4 metodos: depositar, sacar, validar, getter
  depositar(valor) {
    this.#saldo += valor;
  }
  sacar(valor) {
    this.#saldo -= valor;
  }

  validar(valor) {
    return valor <= this.#saldo;
  }

  get saldo() {
    return this.#saldo;
  }
}

class CaixaEletronico {
  constructor(conta) {
    this.conta = conta;
  }

  // 3 metodos: depositar, sacar, exibir saldo
  depositar() {
    // pegar valor do depósito
    const valorDeposito = parseFloat(
      document.getElementById("valorDeposito").value,
    );
    // realizar o depósito
    this.conta.depositar(valorDeposito);
    // exibir saldo atualizado
    this.exibirSaldo(this.conta.saldo);
  }
  sacar() {
    // pegar valor do saque
    const valorSaque = parseFloat(document.getElementById("valorSaque").value);
    // fazer o saque
    if (this.conta.validar(valorSaque)) {
      this.conta.sacar(valorSaque);
      this.exibirSaldo(this.conta.saldo);
    } else {
      this.exibirSaldo("Saldo insufisciente");
    }
    // exibir saldo
  }
  exibirSaldo(saldo) {
    document.getElementById("saldo").textContent = `Saldo: R$ ${saldo}`;
    // limpando input
    document.getElementById("valorDeposito").value = "";
    document.getElementById("valorSaque").value = "";
  }
}

// Instâncias
const conta = new ContaBancaria();
const caixaEletronico = new CaixaEletronico(conta);

/*
Quando usuário clicar no botão depositar,  aciona objeto caixaEletronico acionando metodo depositar()*/
