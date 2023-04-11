let showWinner = document.getElementById("show-winner");
let showHeroesBtn = document.getElementById("show-heroes-btn");
let showHeroesContainer = document.getElementById("heroes-containter");
let startFightBtn = document.getElementById("start-fight-btn");
let reloadBtn = document.getElementById("reloadBtn");

showWinner.innerHTML = epicFight.findWinner();
showHeroesBtn.addEventListener("click", showHeroesFunc);
startFightBtn.addEventListener("click", startFightFunc);

function showHeroesFunc() {
    showHeroesContainer.classList.add("d-flex");
    showHeroesBtn.classList.add("d-none");
    startFightBtn.classList.add("d-block");
}

function startFightFunc() {
    showHeroesContainer.classList.remove("d-flex");
    startFightBtn.classList.remove("d-block");
    showWinner.classList.add("d-block");
    reloadBtn.classList.add("d-block");
}