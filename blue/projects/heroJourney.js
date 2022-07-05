const prompt = require("prompt-sync")();

const counter = 0;

function confirmAnswer(answer) {
    if (answer === 'S') {
        counter++;
    } else if (answer !== 'S' && answer !== 'N') {
        console.log('Insira uma resposta válida!');
    }
}

console.log();
console.log(
  `Uma senhora de um vilarejo lhe faz um pedido: ela precisa reencontrar alguns objetos perdidos,
   que foram deixados longe daqui; a idosa, com dificuldades para se locomover pede então a sua ajuda para
    trazer seus pertences.

    Então, ela te dá o mapa para que encontre a casa. Ao chegar em seu destino, a procura pela chave correta começa...`
);
console.log();

console.log(
  `Os objetos a qual ela se refere são um colar com uma chave dourada, está provavelmente dentro de uma gaveta da antiga casa da velha
          e uma mala que contém dinheiro. A chave correta precisa abrir a entrada do porão da casa, onde estará o segundo objeto.`
);

setTimeout(() => {
  let firstQuestion =
    prompt(`1) Depois de revirar as gavetas do quarto e encontrar um molho com várias chaves, você conseguiu facilmente
    encontrar a chave dourada?
    [S/N]
    : `);

  let secondQuestion =
    prompt(`2) Abrindo o porão da casa, você encontrou a mala com a quantia informada? Decidiu não roubar o dinheiro?
    [S/N]
    : `);

  let thirdQuestion =
    prompt(`3) Lembrou-se de guardar a chave no local onde encontrou?
    [S/N]
    : `);

  let fourthQuestion =
    prompt(`4) Comprou um medicamento e um acessório para ajudar a senhora, já muito doente?
    [S/N]
    : `);
}, 2000);
