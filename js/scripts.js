const startPage = document.getElementById("start-page");
const gamePage = document.getElementById("game-page");
const losePage = document.getElementById("lose-page");
const startButton = document.getElementById("start");
const colorButtons = document.querySelectorAll('.color-button');

const game = new Game;

//start button initializes game
startButton.addEventListener('click', () => {
  startPage.classList.add("hidden");
  gamePage.removeAttribute("style");
  game._newBoard();
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

//events for every time we click a colored button
colorButtons.forEach((button) => {
  button.addEventListener('click', () => {

  })
})


