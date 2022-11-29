class Game {

  constructor () {
      this.board = [];
      this.playerMoves = 0;
      this.playerBoard = []; //keep track of cells in player's control. Starts with top-left cell.
  }

  //generate board of 9 rows x 16 columns with a given color pattern
  //each cell will have a value stating its color
  newBoard (rows = 4, columns = 4, colorPattern = colorPatternStandard) {
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            row.push(colorPattern[random(colorPattern.length)]);
        }
        this.board.push(row);
    }
  }

  //Absorbs adjacent cells that share the same color as the player's and adds them to the list of player controlled cells
  absorbCells () {
    for (let cell of this.playerCells) {
      //Careful not to access array positions out of bounds. Top-left boundaries must have minimum value 0, while bottom-right boundaries must have maximum value number of rows or number of columns.
      const original = this.board[0][0];
      const left = Math.max(0, cell[0]-1);
      const right = Math.min(this.board[0].length-1, cell[0]+1);
      const above = Math.max(0, cell[1]-1);
      const below = Math.min(this.board.length-1, cell[1]+1);
      const coordsLeft = [left, cell[1]];
      const coordsRight = [right, cell[1]];
      const coordsAbove = [cell[0], above];
      const coordsBelow = [cell[0], below];

      //we check if an adjacent cell is the same color as cell 0,0. We also check that we haven't already included this neighbouring cell in the player's cells (to avoid repetition)
      //we only bother if any of the adjacent cells is not already part of the players cells
      for (let ownCell of this.playerCells) {
        if (
          JSON.stringify(ownCell) != JSON.stringify(coordsLeft) && 
          JSON.stringify(ownCell) != JSON.stringify(coordsRight) &&
          JSON.stringify(ownCell) != JSON.stringify(coordsAbove) &&
          JSON.stringify(ownCell) != JSON.stringify(coordsBelow)
          ) {
            if (this.board[coordsLeft[0]][coordsLeft[1]] === original) {
              this.playerCells.push(coordsLeft);
            }
            if (this.board[coordsRight[0]][coordsRight[1]] === original) {
              this.playerCells.push(coordsRight);
            }
            if (this.board[coordsAbove[0]][coordsAbove[1]] === original) {
              this.playerCells.push(coordsAbove);
            }
            if (this.board[coordsBelow[0]][coordsBelow[1]] === original) {
              this.playerCells.push(coordsBelow);
            }
        }
      }
    }
  }

  //Recolors the cells in player's control with the new selected color
  recolorCells (color) {
    for (let cell of this.playerCells) {
      this.board[cell[0]][cell[1]] = color;
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