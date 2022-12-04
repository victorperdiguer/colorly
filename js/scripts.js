const startPage = document.getElementById("start-page");
const gamePage = document.getElementById("game-page");
const losePage = document.getElementById("lose-page");
const colorButtons = document.querySelectorAll('.color-button');

const game = new Game;

//start button initializes game
startPage.addEventListener('click', () => {
  startPage.classList.add("hidden");
  gamePage.removeAttribute("style");
  //generate board and absorb same color cells next to starting cell
  game._newBoard();
  game._checkNeighbours(0, 0, game.board[0][0]);

  //paint board with html and css
  let html = '';
  for (let row = 0; row < game.board.length; row++) {
    html += `
    <div class="row" id="row-${row}">
    `
    for (let column = 0; column < game.board[row].length; column++) {
      html += `
        <div class="cell" id="row-${row}column-${column}" style="background-color: ${game.board[row][column]}"></div>
      `
    }
    html +=`
    </div>
    `
  }

  //we add the board we created to the HTML
  document.querySelector('#grid').innerHTML = html;
})

const cells = document.querySelectorAll(".cell");

//win function
function win () {
  const winAnimation = setInterval(() => {
    console.log(cells);
    cells.forEach((cell) => cell.classList.add('rotate'));
  }, 200)
}

//events for every time we click a colored button
colorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    //reenable all buttons and disable the color just clicked
    colorButtons.forEach((elem) => elem.removeAttribute('disabled'));
    button.setAttribute('disabled', '');

    //make player move with the clicked color
    color = Number(button.getAttribute('id'));
    game.playerMove(colorPatternStandard[color]);

    //update scoreboard
    const score = document.querySelectorAll("#score h3");
    score[0].textContent = `${game.playerMoves}/21`;
    game._recolorCells(colorPatternStandard[color]);

    //repaint css and html
    for (let row = 0; row < game.playerBoard.length; row++) {
      for (let column = 0; column < game.playerBoard[0].length; column++) {
        if (game.playerBoard[row][column]) {
          const cell = document.getElementById(`row-${row}column-${column}`);
          cell.setAttribute("style", `background-color: ${colorPatternStandard[color]}`);
          document.getElementById('title').setAttribute("style", `text-decoration: ${colorPatternStandard[color]} wavy underline`);
        }
      }
    }

    //check game status after every move
    if (game._checkGameStatus() === "lost") {
      win();
    }
    if (game._checkGameStatus() === "win") {
      alert('You win');
    }
  })
})


