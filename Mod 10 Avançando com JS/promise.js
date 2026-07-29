// classe Promise recebendo duas funções de callback
const promessa = new Promise((resolve, reject) => {
  let sucesso = true; //simulando sucesso ou falha

  setTimeout(() => {
    if (sucesso) {
      resolve("Operação bem sucedida.");
    } else {
      reject("Ocorreu um erro.");
    }
  }, 2000);
});

promessa
  .then((resultado) => console.log(resultado)) //se promessa for resolvida
  .catch((erro) => console.error(erro)) //se promessa for rejeitada
  .finally(() => console.log("Processo finalizado"));

/* leitura final
se sucesso for true, operação bem sucedida;
se sucesso for false, ocorreu um erro;

promessa
entao, se resultado for true escreva resultado
capture erro
finalmente, escreva processo finalizado
*/
