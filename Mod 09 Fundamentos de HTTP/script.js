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
// ============ FUNÇÃO PARA DELETAR TAREFA (async/await) ============
async function deletarTarefa(id, elemento) {
  try {
    const response = await fetch(`${CrudCrudURL}/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      elemento.remove();
      console.log("✅ Tarefa deletada!");
    } else {
      alert("Erro ao deletar tarefa");
    }
  } catch (error) {
    console.error("Erro:", error);
    alert("Erro ao conectar com o servidor");
  }
}

// ============ EVENTO DE DELETE ============
tarefas.addEventListener("click", function (event) {
  const btn = event.target.closest(".delete");

  if (btn) {
    const item = btn.closest("li");
    const id = item.dataset.id;

    if (id && confirm("Deletar esta tarefa?")) {
      deletarTarefa(id, item); // ← CHAMA A FUNÇÃO
    }
  }
});
