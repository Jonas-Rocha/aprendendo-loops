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

/*
FOR repete ENQUANTO a condição for VERDADEIRA.

- variável de controle
- condição
- incremento ou decremento da variável de controle
*/

for (step = 0; step < 10; step++) {
  console.log(step);
}

// Exemplo de tabuada.
console.log("### TABUADA ###");
console.log(`7x0 = ${7 * 0}`);
console.log(`7x1 = ${7 * 1}`);
console.log(`7x2 = ${7 * 2}`);
console.log(`7x3 = ${7 * 3}`);
console.log(`7x4 = ${7 * 4}`);
console.log(`7x5 = ${7 * 5}`);
console.log(`7x6 = ${7 * 6}`);
console.log(`7x7 = ${7 * 7}`);
console.log(`7x8 = ${7 * 8}`);
console.log(`7x9 = ${7 * 9}`);
console.log(`7x10 = ${7 * 10}`);

// Fazendo o mesmo exemplo acima utiliando o for()

console.log("@@@@ TABUADA COM O FOR @@@@");
let number = 7;

for (step = 0; step <= 10; step++) {
  console.log(`${number} x ${step} = ${number * step}`);
}

// for...in  executa iterações a partir de um objeto e percorre as propriedades.

let person = {
  name: "Jonas",
  surname: "Rocha",
  email: "jonasrpnstudy@gmail.com",
};

let steps = 1;
for (let prop in person) {
  console.log(steps);
  // Exibe o nome da propriedade
  console.log(prop);

  // Exibe o conteúdo da propriedade
  console.log(person[prop]); // Aqui a notação de colchetes [] é muito melhor de usar do que a notação de ponto .
  steps++; // fica verificando e iteragindo
}

let students = ["Jonas", "Andressa", "João"];

for (let index in students) {
  // console.log(index);
  console.log(students[index]);
}

// for...of itera sobre valores de um objeto iterável.

/*Nesta aula, iremos aprender sobre a estrutura de repetição for of, que itera sobre os valores de um objeto iterável. 
Diferente do for in, o for off itera sobre os valores, não sobre as propriedades. É importante que o objeto seja iterável, como um array.*/

let leitores = ["Jonas", "Andressa", "Ana"];

// pode ser index ou i of leitores também, tanto faz.
for (let leitor of leitores) {
  console.log(leitor);
}

let user = [
  {
    name: "Jonas",
    email: "jonasrpnstudy@gmail.com",
  },
];

// NÃO FUNCIONARIA SE O NOSSO OBJETO NÃO TIVESSE DENTRO DE UMA LISTA "ARRAY", POIS OBJETO NÃO É ITERÁVEL!
for (let value of user) {
  console.log(value.name, value.email);
}

/*Nesta aula, vamos aprender um pouco mais sobre o uso da palavra reservada break para encerrar a execução de repetições, como no caso do switch case e em estruturas de repetição como o for. 
No exemplo do switch case, o break é utilizado para encerrar a execução de um caso e evitar a continuação para os próximos casos. Já no for, o break é usado para interromper a repetição em um determinado momento.
O break é útil para controlar o fluxo de execução do código.*/

// Break encerra a execução da repetição ou switch para seguir para a instrição seguinte.

let option = 3;

switch (option) {
  case 1:
    console.log("Cadastrar");
  //break; //o que acontece quando não temos o break

  case 2:
    console.log("Atualizar");
  //break; //o que acontece quando não temos o break

  case 3:
    console.log("Remover");
  //break; //o que acontece quando não temos o break

  default:
    console.log("Opção inválida");
  //break; //o que acontece quando não temos o break
}

// Utilizando o break para finalizar uma repetição.

for (let i = 0; i < 10; i++) {
  //console.log(i); mostrando o 5 antes
  if (i === 5) {
    break;
  }

  console.log(i); // nem chega a executar o 5 pois quando encontra o break ele já para de executar.
}

/* Continue encerra (pula) a execução das instruções na iteração
atual e continua a execução do loop com a próxima iteração. */

/*Agora vamos aprender sobre a palavra reservada continue que pode ser utilizada em estruturas de repetição para pular uma iteração e ir para a próxima, sem encerrar o loop inteiro como o break faz. Quando a condição definida é atendida, o continue é acionado, pulando a execução da iteração atual. Isso é útil para evitar a execução de determinadas partes do código em loops.
 */

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // Pulou o coitado do 5 kkkkkkkkk
  }

  console.log(i);
}

//REPETIÇÃO E ITERAÇÃO FINALIZADO.
