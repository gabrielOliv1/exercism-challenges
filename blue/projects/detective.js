const prompt = require("prompt-sync")();
let counter = 0;
let judgement = "";

console.log(
  `Houve um assasinato na praça central às 23h da última quinta feira, acusações feitas por testemunhas apontam você como um dos principais
    suspeitos. Por isso, a polícia inicia um interrogatório contigo.`
);

const firstQuestion =
  prompt(`Na noite de quarta-feira, um dia antes do crime, você saiu para a cidade vizinha?
[S/N]
:`);
if (firstQuestion.toLowerCase() === "s") {
  counter++;
}

const secondQuestion =
  prompt(`Nos últimos meses, você entrou em contato com o ex-namorado da vítima?
[S/N]
:`);
if (secondQuestion.toLowerCase() === "s") {
  counter++;
}

const thirdQuestion = prompt(`Você saiu de casa às 17h no dia do crime?
[S/N]
: `);
if (thirdQuestion.toLowerCase() === "s") {
  counter++;
}

const fourthQuestion = prompt(`Você trabalhou com a vítima no passado?
[S/N]
: `);
if (fourthQuestion.toLowerCase() === "s") {
  counter++;
}

const fifthQuestion =
  prompt(`É verdade que houve um desentimento entre vocês antes de sua saída da empresa onde trabalhavam?
[S/N]
: `);
if (fifthQuestion.toLowerCase() === "s") {
  counter++;
}

switch (counter) {
  case 0 || 1 || 2:
    judgement = "Inocente";

    console.log(`Você é ${judgement}`);
    break;

  case 3:
    judgement = "Suspeito";

    console.log(`Você é ${judgement}`);
    break;

  case 4 || 5:
    judgement = "Culpado";

    console.log(`Você é ${judgement}`);
    break;

  default:
    console.log("Dados insuficientes para o julgamento!");
}
