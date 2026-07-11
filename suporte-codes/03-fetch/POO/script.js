// ============================================
// CLASSE ENDERECO - Responsável pelos dados
// ============================================
class Endereco {
  constructor(
    cep = "",
    logradouro = "",
    bairro = "",
    cidade = "",
    estado = "",
  ) {
    this.cep = cep;
    this.logradouro = logradouro;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

  // Preenche os campos do formulário com os dados do endereço
  preencherFormulario() {
    document.getElementById("cep").value = this.cep;
    document.getElementById("logradouro").value = this.logradouro;
    document.getElementById("bairro").value = this.bairro;
    document.getElementById("cidade").value = this.cidade;
    document.getElementById("estado").value = this.estado;
  }

  // Converte o objeto para JSON
  toJSON() {
    return {
      cep: this.cep,
      logradouro: this.logradouro,
      bairro: this.bairro,
      cidade: this.cidade,
      estado: this.estado,
    };
  }

  // Cria um Endereco a partir de um objeto JSON
  static fromJSON(dados) {
    return new Endereco(
      dados.cep || "",
      dados.logradouro || "",
      dados.bairro || "",
      dados.cidade || "",
      dados.estado || "",
    );
  }

  // Cria um Endereco a partir dos dados da API ViaCEP
  static fromViaCEP(cep, data) {
    return new Endereco(
      cep,
      data.logradouro || "",
      data.bairro || "",
      data.localidade || "",
      data.uf || "",
    );
  }
}

// ============================================
// CLASSE LOCALSTORAGE - Responsável por salvar/carregar
// ============================================
class EnderecoStorage {
  static CHAVE = "endereco_salvo";

  // Salva um endereço no localStorage
  static salvar(endereco) {
    try {
      localStorage.setItem(this.CHAVE, JSON.stringify(endereco.toJSON()));
    } catch (erro) {
      console.error("Erro ao salvar no localStorage:", erro);
    }
  }

  // Carrega um endereço do localStorage
  static carregar() {
    try {
      const dadosSalvos = localStorage.getItem(this.CHAVE);
      if (dadosSalvos) {
        const dados = JSON.parse(dadosSalvos);
        return Endereco.fromJSON(dados);
      }
      return null;
    } catch (erro) {
      console.error("Erro ao carregar do localStorage:", erro);
      return null;
    }
  }

  // Remove o endereço do localStorage
  static limpar() {
    try {
      localStorage.removeItem(this.CHAVE);
    } catch (erro) {
      console.error("Erro ao limpar localStorage:", erro);
    }
  }
}

// ============================================
// CLASSE CEPSERVICE - Responsável por buscar CEP na API
// ============================================
class CepService {
  static BASE_URL = "https://viacep.com.br/ws";

  // Busca um CEP na API ViaCEP
  static async buscar(cep) {
    try {
      const response = await fetch(`${this.BASE_URL}/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        throw new Error("CEP não encontrado");
      }

      return Endereco.fromViaCEP(cep, data);
    } catch (erro) {
      console.error("Erro ao buscar CEP:", erro);
      throw erro;
    }
  }

  // Valida se o CEP tem 8 dígitos
  static validar(cep) {
    return cep && cep.length === 8 && /^\d{8}$/.test(cep);
  }
}

// ============================================
// CLASSE APP - Orquestra toda a aplicação
// ============================================
class App {
  constructor() {
    this.inicializar();
  }

  // Inicializa todos os eventos e carrega dados salvos
  inicializar() {
    // Carrega endereço salvo ao iniciar
    this.carregarEnderecoSalvo();

    // Adiciona evento de busca automática no CEP
    this.configurarBuscaCEP();

    // Adiciona evento do botão limpar
    this.configurarBotaoLimpar();

    console.log("✅ Aplicação inicializada com sucesso!");
  }

  // Carrega o endereço do localStorage e preenche o formulário
  carregarEnderecoSalvo() {
    const endereco = EnderecoStorage.carregar();
    if (endereco) {
      endereco.preencherFormulario();
    }
  }

  // Configura o evento de busca automática ao sair do campo CEP
  configurarBuscaCEP() {
    const campoCep = document.getElementById("cep");

    campoCep.addEventListener("blur", async (evento) => {
      const cepInformado = evento.target.value;

      // Valida o CEP
      if (!CepService.validar(cepInformado)) {
        return;
      }

      try {
        // Busca o endereço na API
        const endereco = await CepService.buscar(cepInformado);

        // Preenche o formulário
        endereco.preencherFormulario();

        // Salva no localStorage
        EnderecoStorage.salvar(endereco);
      } catch (erro) {
        alert(erro.message || "Erro ao buscar CEP");
      }
    });
  }

  // Configura o botão de limpar
  configurarBotaoLimpar() {
    const botaoLimpar = document.getElementById("btn-limpar");

    botaoLimpar.addEventListener("click", (evento) => {
      evento.preventDefault(); // Impede o comportamento padrão do formulário

      // Limpa o localStorage
      EnderecoStorage.limpar();

      // Limpa os campos do formulário
      document.getElementById("cep").value = "";
      document.getElementById("logradouro").value = "";
      document.getElementById("bairro").value = "";
      document.getElementById("cidade").value = "";
      document.getElementById("estado").value = "";

      // Foca no campo CEP
      document.getElementById("cep").focus();

      console.log("🧹 Dados limpos!");
    });
  }
}

// ============================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  new App();
});
