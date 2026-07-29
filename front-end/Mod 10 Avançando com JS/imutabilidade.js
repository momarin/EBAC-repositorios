/* MODIFICAÇÃO DIRETA ========================================= */
let usuario = { nome: "João", idade: 20 };
usuario.idade = 26; //modificação direta

console.log(usuario); //retorno de { nome: "João", idade: 26 }

/* perdeu a rastreabilidade do estado anterior do objeto */
/* ------------------------------------------------------------------------- */
/* IMUTALIBIDADE ===============================================*/
const usuario = { nome: "Maria", idade: 30 };
const novoUsuario = { ...usuario, idade: 40 };

console.log(novoUsuario); // Maria, 40
console.log(usuario); // Maria, 30
/*cria-se um novo usuario a partir do usuario original que terá tudo que o usuario antigo tinha, mas com a modificação desejada 

Mantém-se sempre a instância do objeto anterior*/
