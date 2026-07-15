// API Crud Crud
const CrudCrudURL =
  "https://crudcrud.com/api/2dabfc6053d746ddbdfd2135dd2416cf/tarefas";

// DOM
const tarefas = document.getElementById("lista-tarefas");

// ============ CARREGAR TAREFAS (GET) ============
fetch(CrudCrudURL)
  .then((response) => response.json())
  .then((listaDeTarefas) => {
    listaDeTarefas.forEach((tarefa) => {
      const item = document.createElement("li");
      item.dataset.id = tarefa._id; // ← Guarda o ID
      item.innerHTML = `${tarefa.descricao} <button class="delete"><i class="bi bi-x-circle"></i></button>`;
      tarefas.appendChild(item);
    });
  });

// ============ ADICIONAR TAREFA (POST) ============
document.getElementById("add").addEventListener("click", () => {
  const descricao = document.getElementById("tarefa").value;

  fetch(CrudCrudURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ descricao: descricao }),
  })
    .then((response) => response.json())
    .then((tarefa) => {
      const item = document.createElement("li");
      item.dataset.id = tarefa._id;
      item.innerHTML = `${tarefa.descricao} <button class="delete"><i class="bi bi-x-circle"></i></button>`;
      tarefas.appendChild(item);
      document.getElementById("tarefa").value = "";
    });
});
// ============ EVENTO DE DELETE (DELEGAÇÃO) ============
tarefas.addEventListener("click", function (event) {
  // Verifica se clicou no botão delete ou no ícone dentro dele
  const btn = event.target.closest(".delete"); // ← MUDOU PARA CLASS

  if (btn) {
    const item = btn.closest("li");

    if (item) {
      const id = item.dataset.id;

      if (id && confirm("Deletar esta tarefa?")) {
        fetch(`${CrudCrudURL}/${id}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (response.ok) {
              item.remove();
              console.log("✅ Tarefa deletada!");
            } else {
              alert("Erro ao deletar tarefa");
            }
          })
          .catch((error) => {
            console.error("Erro:", error);
            alert("Erro ao conectar com o servidor.");
          });
      }
    }
  }
});
