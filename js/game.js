class Game {

  constructor () {
      this.board = [];
      this.playerMoves = 0;
      this.maxMoves = 0;
      this.playerBoard = []; //keep track of cells in player's control. Starts with top-left cell.
  }

  //generate board of 9 rows x 16 columns with a given color pattern
  //each cell will have a value stating its color
  _newBoard (rows = 9, columns = 16, colorPattern = colorPatternStandard) {
    for (let i = 0; i < rows; i++) {
        const row = [];
        const playerRow = [];
        for (let j = 0; j < columns; j++) {
            row.push(colorPattern[random(colorPattern.length)]);
            playerRow.push(false);
        }
        this.board.push(row);
        this.playerBoard.push(playerRow);
    }
    this.playerBoard[0][0] = true;
    this.maxMoves = 21;
  }

  //executes a player move
  playerMove (color) {
    for (let row = 0; row < this.playerBoard.length; row++) {
      for (let column = 0; column < this.playerBoard[0].length; column++) {
        if (this.playerBoard[row][column]) {
          this._checkNeighbours(row, column, color);
        }
      }
    }
    this.playerMoves++;
  }

  //this method calls the _absorbCell function for every cell adjacent to the one given
  _checkNeighbours (row, column, color) {
    //to the left, careful not going to -1
    if (row - 1 >= 0) {
      this._absorbCell(row - 1, column, color);
    }
    //to the right, careful not going row length
    if (row < this.board.length - 1) {
      this._absorbCell(row + 1, column, color);
    }
    //above
    if (column - 1 >= 0) {
      this._absorbCell(row, column - 1, color);
    }
    //below
    if (column < this.board[0].length - 1) {
      this._absorbCell(row, column + 1, color);
    }
  }

  //this method compares the color of a given cell to the color given. If they are the same, it is absorbed.
  //this method also checks that the given cell hasn't already been absorbed
  _absorbCell (row, column, color) {
    if (this.board[row][column] === color && this.playerBoard[row][column] === false) {
      this.playerBoard[row][column] = true;
      //everytime we absorb a cell, we need to check its neighbours, so we call again _checkNeighbours for this new cell 
      this._checkNeighbours(row, column, color);
    }
  }

  //Recolors the cells in player's control with the new selected color
  _recolorCells (color) {
    for (let row = 0; row < this.playerBoard.length; row++) {
      for (let column = 0; column < this.playerBoard[0].length; column++) {
        if (this.playerBoard[row][column]) {
          this.board[row][column] = color;
        }
      }
    }
  }

  //checks if we have won or if we have lost the game
  _checkGameStatus() {
    if (this.playerMoves <= this.maxMoves) {
      for (let row of this.playerBoard) {
        if (row.some((elem) => elem === false)) {
          return false;
        }
      }
      return true;
    }
    else {
      return false;
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