// Aprendendo sobre Repetição
// WHILE: Executa a repetição até que a condição seja VERDADEIRA

/*
Nesta aula, abordaremos a estrutura de repetição while, que executa um bloco de código enquanto uma condição é verdadeira. Vamos aprender como declarar e utilizar o while, com exemplos de verificação de condições e controle de execução. Também vamos utilizar a variável de controle execute para decidir se a repetição deve ou não continuar. Além disso vamos ver como utilizar o método prompt para interagir com o usuário e controlar a execução do while.
*/

/*
let execute = true;

while (execute) {
  let response = window.prompt("Deseja continuar: 1 (SIM) ou 2 (NÃO)");

  if (response === "2") {
    execute = false;
  }
}

console.log("Segue o fluxo...");
*/

// Loop infinito

//let value = true;

/*
while (value) {
  não vou pedir pra executar nada pra não ficar num loop infinito
}
*/

/*
DO WHILE: repete até que a condição especificada seja VERDADEIRA. 
No entanto, a instrução será executada pelo menos uma vez antes da condição ser verificada.
*/

let value2 = 11; //Vai executar apenas uma vez dentro do "do", pois no "while" ele já é maior do que 10.

do {
  value2++;
  console.log(value2);
} while (value2 < 10);

console.log("Segue o fluxo...");
