# Game name

<!-- When you finish, add a nice screenshot of your game -->
<!--[<img src="./img/page.png">]()-->

## Description

The goal of the game is to fill out the entire grid with one color.

The player starts in the top-left corner's cell. He can choose any color from the palette available to change the cell's color and absorb **neighbouring** cells that share that same new color. With every new color picked, all previously absorbed cells change color too. 

A **neighbouring** cell is a cell that is directly adjacent to any cell controlled by the player - that is, vertically or horizontally. 

Everytime the player picks a color, a **move** is made.

The player **wins** the game by filling the grid with one color with less moves than the maximum allowed.

The player **loses** the game if he reaches the move limit and the grid still has at least 2 different colors.

## User stories MVP

- User can always access the instructions
- User can see the move limit
- User can see the number of moves he has made so far
- User can see the board's progress
- User can select a color from the color palette

## User stories Backlog

- User can undo his last move
- User can play a custom-size grid
- User can play with a custom number of colors
- User can play a new game at any point
- User can reshuffle the colors of unabsorbed cells at the cost of 1 move
- User can change the color palette to change the appearance of the grid


## File structure

- <code>game.js</code>: contains all the elements for the game to work. Methods: start(), \_update()
- <code>scripts.js</code>: contains all the DOM manipulation code to start the game

## Useful links

<!-- When you finish, add these links and commit -->

- [Presentation slides]()
- [Deployed game]()
