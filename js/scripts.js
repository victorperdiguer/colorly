

  startButton.onclick = function () {
    startPage.style = "display: none";
    canvas.classList.remove('hidden');
    const game = new Game(ctx);
    game.start();
  }
}