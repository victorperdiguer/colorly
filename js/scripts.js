const startPage = document.getElementById("start-page");
const gamePage = document.getElementById("game-page");
const losePage = document.getElementById("lose-page");
  
startButton.onclick = function () {
  startPage.classList.add("hidden");
  gamePage.classList.remove("hidden");
}