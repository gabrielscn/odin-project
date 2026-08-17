const gameBoard = (() => {

  const playerFactory = (name, mark, ai, turn) => {
    return { name, mark, ai, turn };
  };

  const player1 = playerFactory('player 1', 'X', false, true);
  const player2 = playerFactory('player 2', 'O', false, false);

  const winCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [0, 4, 8]
  ];


})
