var gameBoard = [];
var board = [];
var player = 0; // 0 = jogador, CPU = 1
var result;
var playing = true;
var levelDifficulty = 1;
var playCpu = 1;
var starter = 1;

function play(position) {
  if (playing && player == 0) {
    switch (position) {
      case 1:
        if (gameBoard[0][0] == 0) {
          gameBoard[0][0] = "X";
          player = 1;
        }
        break;
      case 2:
        if (gameBoard[0][1] == 0) {
          gameBoard[0][1] = "X";
          player = 1;
        }
        break;
      case 3:
        if (gameBoard[0][2] == 0) {
          gameBoard[0][2] = "X";
          player = 1;
        }
        break;
      case 4:
        if (gameBoard[1][0] == 0) {
          gameBoard[1][0] = "X";
          player = 1;
        }
        break;
      case 5:
        if (gameBoard[1][1] == 0) {
          gameBoard[1][1] = "X";
          player = 1;
        }
        break;
      case 6:
        if (gameBoard[1][2] == 0) {
          gameBoard[1][2] = "X";
          player = 1;
        }
        break;
      case 7:
        if (gameBoard[2][0] == 0) {
          gameBoard[2][0] = "X";
          player = 1;
        }
        break;
      case 8:
        if (gameBoard[2][1] == 0) {
          gameBoard[2][1] = "X";
          player = 1;
        }
        break;
      case 9:
        if (gameBoard[2][2] == 0) {
          gameBoard[2][2] = "X";
          player = 1;
        }
        break;
    }

    if (player == 1) {
      updateBoard();
      result = winner();

      if (result != "") {
        alert(`O vencedor é ${result}`);
        playing = false;
      }

      cpuPlays();
    }
  }
}

function updateBoard() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (gameBoard[i][j] == "X") {
        board[i][j].innerHTML = "X";
        board[i][j].style.cursor = "default";
      } else if (gameBoard[i][j] == "O") {
        board[i][j].innerHTML = "O";
        board[i][j].style.cursor = "default";
      } else {
        board[i][j].innerHTML = "";
        board[i][j].style.cursor = "pointer";
      }
    }
  }
}

function cpuPlays() {
  if (playing) {
    let line, column;

    if (levelDifficulty == 1) {
      do {
        line = Math.round(Math.random() * 2);
        column = Math.round(Math.random() * 2);

        console.log(line);
        console.log(column);
      } while (gameBoard[line][column] != "");
      gameBoard[line][column] = "O";
    } else if (level == 2) {
      // level 2
    }
    result = winner();

    if (result != "") {
      alert(`O vencedor é ${result}`);
      playing = false;
    }
    player = 0;
  }

  updateBoard();
}

function winner() {
  let line, column;

  for (line = 0; line < gameBoard.length; line++) {
    if (
      gameBoard[line][0] == gameBoard[line][1] &&
      gameBoard[line][1] == gameBoard[line][2]
    ) {
      return gameBoard[line][0];
    }
  }

  for (column = 0; column < gameBoard.length; column++) {
    if (
      gameBoard[0][column] == gameBoard[1][column] &&
      gameBoard[1][column] == gameBoard[2][column]
    ) {
      return gameBoard[0][column];
    }
  }

  if (
    gameBoard[0][0] == gameBoard[1][1] &&
    gameBoard[1][1] == gameBoard[2][2]
  ) {
    return gameBoard[0][0];
  }

  if (
    gameBoard[0][2] == gameBoard[1][1] &&
    gameBoard[1][1] == gameBoard[2][0]
  ) {
    return gameBoard[0][2];
  }

  return "";
}

function initGame() {
  playing = true;
  jogadaCpu = 1;
  gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  board = [
    [
      document.getElementById("pos-1"),
      document.getElementById("pos-2"),
      document.getElementById("pos-3"),
    ],
    [
      document.getElementById("pos-4"),
      document.getElementById("pos-5"),
      document.getElementById("pos-6"),
    ],
    [
      document.getElementById("pos-7"),
      document.getElementById("pos-8"),
      document.getElementById("pos-9"),
    ],
  ];
}

window.addEventListener("load", initGame);
