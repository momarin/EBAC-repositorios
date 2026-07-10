const btnTema = document.getElementById("btn-tema");

btnTema.addEventListener("click", () => {
  //verificando tema
  const temaAtual = localStorage.getItem("tema");
  //verificando que tema e invertendo
  const novoTema = temaAtual === "escuro" ? "claro" : "escuro";
  //adicionando a classe "escuro" ao elemento body
  document.body.classList.toggle(novoTema);
  //Salvar a preferência do usuário no LocalStorage
  localStorage.setItem("tema", novoTema);
  btnTema.textContent = novoTema === "escuro" ? "☀︎" : "☾";
});

// principais métodos
/*localStorage.setItem("chave", valor);
localStorage.getItem("chave");
localStorage.removeItem("chave");
localStorage.clear();*/
