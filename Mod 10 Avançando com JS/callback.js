// SET TIME OUT
function mensagemBoasVindas() {
  alert("Seja bem vindo ao nosso site!");
}

setTimeout(mensagemBoasVindas, 3000);
console.log("Mensagem aparecerá em 3 segundos...");
/* ------------------------------------------------------------- */
// Custom CALLBACK
function buscarDados(callback) {
  //1. Aqui iria um fetch chamando alguma API
  //2. Callback(); // aqui invoco a função que foi passada como callback
}
function mostrarMensagem() {
  console.log("Operação concluída");
}
buscarDados(mostrarMensagem);
