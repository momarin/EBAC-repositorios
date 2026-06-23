// COM OBJETO ÚNICO
function criarCachorro(raca, porte) {
  return {
    raca,
    porte,
    latir: () => "latindo",
    correr: () => "correndo",

    apresentarLatindo() {
      console.log(
        `Eu sou ${this.raca}, sou um cachorro de porte ${this.porte} e estou ${this.latir()}.`,
      );
    },

    apresentarCorrendo() {
      console.log(
        `Eu sou ${this.raca}, sou um cachorro de porte ${this.porte} e estou ${this.correr()}.`,
      );
    },

    apresentarLatindoECorrendo() {
      console.log(
        `Eu sou ${this.raca}, sou um cachorro de porte ${this.porte} e estou ${this.latir()} e ${this.correr()}.`,
      );
    },
  };
}

const cachorro4 = criarCachorro("Bulldog", "médio");
const cachorro5 = criarCachorro("Pitbull", "médio");
const cachorro6 = criarCachorro("Chihuahua", "pequeno");

cachorro4.apresentarLatindo();
cachorro5.apresentarCorrendo();
cachorro6.apresentarLatindoECorrendo();
/* ------------------------------------------------------- */
// COM COMPOSIÇÃO --> funcional puro

// Dados puros
const cachorro7 = { raca: "Yorkshire", porte: "pequeno" };
const cachorro8 = { raca: "Greyhound", porte: "grande" };
const cachorro9 = { raca: "Terra Nova", porte: "grande" };

// Funções puras
const latir = () => "latindo";
const correr = () => "correndo";

const apresentarLatindo = (cachorro) =>
  console.log(
    `Eu sou um ${cachorro.raca}, sou um cachorro de porte ${cachorro.porte} e estou ${latir()}.`,
  );

const apresentarCorrendo = (cachorro) =>
  console.log(
    `Eu sou um ${cachorro.raca}, sou um cachorro de porte ${cachorro.porte} e estou ${correr()}.`,
  );

const apresentarLatindoECorrendo = (cachorro) =>
  console.log(
    `Eu sou um ${cachorro.raca}, sou um cachorro de porte ${cachorro.porte} e estou ${latir()} e ${correr()} ao mesmo tempo.`,
  );

// Executando
apresentarLatindo(cachorro7);
apresentarCorrendo(cachorro8);
apresentarLatindoECorrendo(cachorro9);
