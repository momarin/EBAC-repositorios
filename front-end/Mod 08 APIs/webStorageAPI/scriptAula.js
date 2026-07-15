const btnTema = document.getElementById("btn-tema");

btnTema.addEventListener("click", () => {
  const temaAtual = localStorage.getItem("tema");
  const novoTema = temaAtual === "escuro" ? "claro" : "escuro";
  document.body.classList.toggle(novoTema);
  localStorage.setItem("tema", novoTema);
  btnTema.textContent = novoTema === "escuro" ? "☀" : "☽";
});

document.addEventListener("DOMContentLoaded", () => {
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "escuro") {
    document.body.classList.add("escuro");
    btnTema.textContent = "☀";
  } else {
    btnTema.textContent = "☽";
  }
});

// principais métodos
/*localStorage.setItem("chave", valor);
localStorage.getItem("chave");
localStorage.removeItem("chave");
localStorage.clear();*/
