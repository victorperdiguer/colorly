const startPage = document.getElementById("start-page");
const gamePage = document.getElementById("game-page");
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

//end function
function _end (win) {
  //disable buttons, game is over
  colorButtons.forEach((elem) => elem.setAttribute('disabled', ''));
  //epilepsy
  const endAnimation = setInterval(() => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => cell.setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`))

    //cool message :)
    window.addEventListener('click', () => {
      clearInterval(endAnimation);
      cells.forEach((cell) => cell.setAttribute("style", `background-color: black`));
      //"you win"
      //Y
      document.getElementById("row-0column-2").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-1column-2").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-1column-3").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-1column-4").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-0column-4").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-2column-3").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-3column-3").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      //O
      document.getElementById("row-0column-6").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-1column-6").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-2column-6").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-3column-6").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-0column-8").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-1column-8").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-2column-8").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-3column-8").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-0column-7").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-3column-7").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      //U
      document.getElementById("row-0column-10").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-1column-10").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-2column-10").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-3column-10").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-0column-12").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-1column-12").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-2column-12").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-3column-12").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-3column-11").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      //W
      document.getElementById("row-5column-3").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-6column-3").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-7column-3").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-8column-4").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-7column-5").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-8column-6").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-7column-7").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-6column-7").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-5column-7").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      //I
      document.getElementById("row-5column-9").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-6column-9").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-7column-9").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-8column-9").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      //N
      document.getElementById("row-5column-11").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-6column-11").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-7column-11").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-8column-11").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-5column-14").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-6column-14").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-7column-14").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-8column-14").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-6column-12").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      document.getElementById("row-7column-13").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      if (!win) {
        document.getElementById("row-5column-1").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
        document.getElementById("row-6column-1").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
        document.getElementById("row-8column-1").setAttribute("style", `background-color: ${colorPatternStandard[random(6)]}`);
      }
    })
  }, 50)
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
    score[0].textContent = `${game.playerMoves}/${game.maxMoves}`;
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
      _end(false);
    }
    if (game._checkGameStatus() === "win") {
      _end(true);
    }
  })
})


