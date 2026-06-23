class ContaBancaria {
  constructor(saldo) {
    this._saldo = saldo;
  }

  get saldo() {
    return this._saldo.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  set saldo(valor) {
    if (valor < 0) {
      console.log("Saldo não pode ser negativo");
    } else {
      this._saldo = valor;
    }
  }
}

const conta = new ContaBancaria(100);
console.log(conta.saldo);
conta.saldo = -50;
conta.saldo = 200;
console.log(conta.saldo);
