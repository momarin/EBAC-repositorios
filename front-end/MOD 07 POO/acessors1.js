class Pessoa {
  constructor(nome) {
    // _ indica que é "privado"
    this._nome = nome;
  }

  // GET - para ler o valor
  get nome() {
    return this._nome;
  }

  // SET - para modificar o valor
  set nome(novoNome) {
    if (novoNome.length < 3) {
      console.log("Nome muito curto");
    } else {
      this._nome = novoNome;
    }
  }
}

// Usando:
const pessoa1 = new Pessoa("Marina");

// get
console.log(pessoa1.nome);

// set
pessoa1.nome = "Diego";

console.log(pessoa1.nome);
