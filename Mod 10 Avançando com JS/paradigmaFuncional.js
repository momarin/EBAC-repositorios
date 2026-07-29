/* Modo Imperativo ==================================== */
const numeros = [1, 2, 3, 4, 5, 6];
const resultado = []; // array p armazenar valores processados

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    resultado.push(numeros[i] * 2);
  }
}

console.log(resultado); // [4, 8, 12]
/* ------------------------------------------------------------------------ */
/* Modo Declarativo ==================================== */
const num = [1, 2, 3, 4, 5, 6];
const result = num
  .filter((n) => n % 2 === 0) // filtra numeros pares
  .map((n) => n * 2); //multiplica cada numero par por 2
console.log(result); // [4. 8, 12]
