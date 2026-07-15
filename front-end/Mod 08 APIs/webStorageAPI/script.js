const btnTema = document.getElementById("btn-tema");

btnTema.addEventListener("click", () => {
  // Alterna a classe escuro
  document.body.classList.toggle("escuro");

  // Verifica se a classe foi adicionada
  const isEscuro = document.body.classList.contains("escuro");

  // Atualiza ícone e localStorage
  btnTema.textContent = isEscuro ? "☀︎" : "☾";
  localStorage.setItem("tema", isEscuro ? "escuro" : "claro");
});

// Carregar tema salvo
document.addEventListener("DOMContentLoaded", () => {
  const temaSalvo = localStorage.getItem("tema");

  if (temaSalvo === "escuro") {
    document.body.classList.add("escuro");
    btnTema.textContent = "☀︎";
  } else {
    btnTema.textContent = "☾";
  }
});

// principais métodos
/*localStorage.setItem("chave", valor);
localStorage.getItem("chave");
localStorage.removeItem("chave");
localStorage.clear();*/
