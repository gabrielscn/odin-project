const Gameboard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", "",];

  const render = () => {
    let boardHTML = "";
    gameboard.forEach((square, index) => {
      boardHTML += `<div class="square" id="square-${index}">${square}</div>`
    })
    document.querySelector("#gameboard").innerHTML = boardHTML;
  }

  const updateSquare = (index, mark) => {
    gameboard[index] = mark;
    render();
  };

  const isSquareTaken = (index) => gameboard[index] !== "";

  const winningCombination = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  const checkWinner = () => {
    for (const combo of winningCombination) {
      const [a, b, c] = combo;
      if (gameboard[a] && gameboard[a] === gameboard[b] && gameboard[a] === gameboard[c]) {
        return gameboard[a];
      }
    }
    return null;
  };

  const isFull = () => gameboard.every((square) => square !== "");

  const reset = () => {
    gameboard = ["", "", "", "", "", "", "", "", "",];
    render();
  };


  return {
    render,
    updateSquare,
    isSquareTaken,
    checkWinner,
    isFull,
    reset,
  }
})();

const createPlayer = (name, mark) => {
  return {
    name,
    mark
  }
}

const Game = (() => {
  let players = [];
  let currentPlayerIndex;
  let gameOver;

  const start = () => {
    players = [
      createPlayer(document.querySelector("#player1").value, "X"),
      createPlayer(document.querySelector("#player2").value, "O")
    ]

    currentPlayerIndex = 0;
    gameOver = false;
    Gameboard.render();
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("click", handleClick);
    })

  }

  const handleClick = (event) => {
    if (gameOver) return;

    let index = parseInt(event.target.id.split("-")[1]);

    if (Gameboard.isSquareTaken(index)) return;

    const currentPlayer = players[currentPlayerIndex];
    Gameboard.updateSquare(index, currentPlayer.mark);

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("click", handleClick);
    });

    const winnerMark = Gameboard.checkWinner();

    if (winnerMark) {
      gameOver = true;
      displayResult(`${currentPlayer.name || currentPlayer.mark} Wins!`);
      return;
    }

    if (Gameboard.isFull()) {
      gameOver = true;
      displayResult("DRAW!");
    }

    currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
  }
  const displayResult = (message) => {
    document.querySelector("#result-display").textContent = message;
  }

  const restart = () => {
    Gameboard.reset();
    document.querySelector("#result-display").textContent = "";
    start();
  }


  return {
    start,
    restart,
  }

})();

const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", () => {
  Game.start();
});

const restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click", () => {
  Game.restart();
});
