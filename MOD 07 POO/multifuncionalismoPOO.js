// PROGRAMAÇAO ORIENTADA A OBJETOS
class Cachorro {
  constructor(raca, porte) {
    this.raca = raca;
    this.porte = porte;
  }

  latir() {
    return "latindo";
  }

  correr() {
    return "correndo";
  }

  apresentarLatindo() {
    console.log(
      `Eu sou um ${this.raca}, sou um cachorro de porte ${this.porte} e estou ${this.latir()}.`,
    );
  }

  apresentarCorrendo() {
    console.log(
      `Eu sou um ${this.raca}, sou um cachorro de porte ${this.porte} e estou ${this.correr()}`,
    );
  }

  apresentarLatindoECorrendo() {
    console.log(
      `Eu sou um ${this.raca}, sou um cachorro de porte ${this.porte} e estou ${this.latir()} e ${this.correr()} ao mesmo tempo.`,
    );
  }
}

const cachorro1 = new Cachorro("Poodle", "médio");
cachorro1.apresentarLatindo();

const cachorro2 = new Cachorro("Rotweiller", "grande");
cachorro2.apresentarCorrendo();

const cachorro3 = new Cachorro("Beagle", "médio");
cachorro3.apresentarLatindoECorrendo();
