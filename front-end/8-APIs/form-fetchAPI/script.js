// 1. Ouvir o evento de quando o usuário sair do campo do CEP
document.getElementById("cep").addEventListener("blur", (evento) => {
  const elemento = evento.target;
  const cepInformado = elemento.value;

  //2. Validar CEP
  if (!(cepInformado.length === 8)) return;

  //3. Fazer busca no ViaCEP
  // 3.1 promessa de que o Fetch vai buscar o recurso
  fetch(`https://viacep.com.br/ws/${cepInformado}/json/`).then((response) =>
    response
      .json()
      .then((data) => {
        //3.2 processamento da página
        if (!data.erro) {
          document.getElementById("logradouro").value = data.logradouro;
          document.getElementById("bairro").value = data.bairro;
          document.getElementById("cidade").value = data.localidade;
          document.getElementById("estado").value = data.uf;
        } else {
          alert("Cep não encontado.");
        }
      })
      .catch((error) => console.error("Erro ao buscar: ", error)),
  );
});
