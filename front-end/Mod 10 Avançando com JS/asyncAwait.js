function buscarDados() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Dados carregados!"), 2000);
  });
}

async function main() {
  const resultado = await buscarDados();
  console.log(resultado);
}
main();
