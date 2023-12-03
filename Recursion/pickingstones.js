// There is a pile of n (n > 0) stones.
// Player A and Player B take turns to pick 1 or 2 stones from the pile. A starts first.
// Who picks the last stone loses the game.
// Now here is the question, is there a winning strategy for A or B ? If so, returns the player name. If there is none, return null.

function whoWins(n) {
  function whoWin(n, first, second) {
    if (n === 1) return second;
    if (n === 2 || n === 3) return first;

    if (
      whoWin(n - 2, first, second) === first ||
      whoWin(n - 1, first, second) === first
    )
      return second;
    else return first;
  }

  return whoWin(n, "A", "B");
}

console.log(whoWins(1));
console.log(whoWins(2));
console.log(whoWins(3));
console.log(whoWins(4));

// function whoWins(n) {

//     return n % 3 === 1 ? 'B' : 'A';

// }
// winningStonePicking(1)
// // 'B'

// winningStonePicking(2)
// // 'A'

// winningStonePicking(3)
// // 'A'

// winningStonePicking(4)
// // 'B'
