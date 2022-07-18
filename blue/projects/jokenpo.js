const prompt = require("prompt-sync")();

const round = +prompt("Quantas rodadas jogaremos? ");
let countRounds = 0;
const options = {
  pedra: 1,
  papel: 2,
  tesoura: 3,
};
let countPlayerWins = 0,
countComputerWins = 0;

function playerChoice() {
  console.log("Faça sua escolha: pedra, papel ou tesoura: ");
  const choice = prompt("").trim().toLowerCase();

  return choice;
}

function randomChoice() {
  const min = 1,
    max = 3;

  return Math.floor(Math.random() * (max - min + 1) + min);
}

while (countRounds < round) {
  countRounds++;

  let player_choice = playerChoice();
  console.log("");
  let computer_choice = randomChoice();
  console.log(computer_choice);
  console.log("");

  for (const choice of Object.values(options)) {
    computer_choice == choice
      ? (computer_choice = Object.keys(options)[choice - 1])
      : computer_choice;
  }

  if (player_choice == computer_choice) {
    console.log(`Houve um empate!
    Placar: Computador ${countComputerWins} x Jogador ${countPlayerWins}`);
  }

  if (
    (player_choice == "pedra" && computer_choice == "tesoura") |
    (player_choice == "papel" &&
      (computer_choice == "pedra") |
        (player_choice == "tesoura" && computer_choice == "papel"))
  ) {
    console.log(
      `Jogador: ${(countPlayerWins += 1)}, computador: ${countComputerWins}`
    );
  }

  if (
    (computer_choice == "pedra" && player_choice == "tesoura") |
    (computer_choice == "papel" &&
      (player_choice == "pedra") |
        (computer_choice == "tesoura" && player_choice == "papel"))
  ) {
    console.log(
      `Computador: ${(countComputerWins += 1)}, jogador: ${countPlayerWins}`
    );
  }
}
