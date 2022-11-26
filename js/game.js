//color patterns
const colorPatternGrayscale = [
  "#000000",
  "#1a1a1a",
  "#4d4d4d",
  "#808080",
  "#b3b3b3",
  "#e6e6e6",
]

const colorPatternStandard = [
  "crimson",
  "blueviolet",
  "limegreen",
  "orange",
  "gold",
  "hotpink"
]

// const appliedColor = [
//   c1,
//   c2,
//   c3,
//   c4,
//   c5,
//   c6
// ];

//auxiliary function
function random(n) {
  return Math.floor(Math.random() * n);
}

class Game {

  constructor () {
      this.board = [];
      this.playerMoves = 0;
  }

  //generate board of 9 rows x 16 columns with a given color pattern
  //each cell will have a value stating its color
  newBoard (rows = 9, columns = 16, colorPattern = colorPatternStandard) {
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            row.push(colorPattern[random(colorPattern.length)]);
        }
        this.board.push(row);
    }
  }


  // _assignControls() {
  //   // Controles del teclado
  //   document.addEventListener('keydown', (event) => {
  //     switch (event.code) {
  //       case 'ArrowLeft':
  //         this.meatball.moveLeft();
  //         break;
  //       case 'ArrowRight':
  //         this.meatball.moveRight();
  //         break;
  //       default:
  //         break;
  //     }
  //   });
  // }

  // _update() {
  //   window.requestAnimationFrame(() => this._update());
  // }

  // start() {
  //   this._assignControls();
  //   this._update();
  // }
}