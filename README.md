# C O L O R L Y

<img src="/img/game-screenshot.png">

## Description

The goal of the game is to fill out the entire grid with one color.

The player starts in the top-left corner's cell. He can choose any color from the palette available to change the cell's color and absorb **neighbouring** cells that share that same new color. With every new color picked, all previously absorbed cells change color too. 

A **neighbouring** cell is a cell that is directly adjacent to any cell controlled by the player - that is, vertically or horizontally. 

Everytime the player picks a color, a **move** is made. The player can also **shuffle** the rest of the board to randomize the color of the cells he hasn't absorbed yet. This also counts as one **move**.

The player **wins** the game by filling the grid with one color with less moves than the maximum allowed.

The player **loses** the game if he passes the move limit and the grid still has at least 2 different colors.

## User stories MVP

- User can always access the instructions
- User can see the move limit
- User can see the number of moves he has made so far
- User can see the board's progress
- User can select a color from the color palette

## User stories Backlog

- ~~User can play a new game at any point~~ Done!
- ~~User can reshuffle the colors of unabsorbed cells at the cost of 1 move~~ Done!
- ~~Game tracks highscore from browser session~~ Done!

**To do**
- User can undo his last move
- User can play a custom-size grid
- User can change the color palette to change the appearance of the grid

## File structure

- <code>assets.js</code>: contains certain variables and auxiliary functions
- <code>game.js</code>: contains all the elements for the game to work.
- <code>scripts.js</code>: contains all the DOM manipulation code to play the game

## Useful links

- [Presentation slides](https://slides.com/d/bx2zeNc/live)
- [Deployed game](https://victorperdiguer.github.io/colorly/)
