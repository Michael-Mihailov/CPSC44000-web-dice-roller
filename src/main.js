let initialDiceNums = [1, 2, 3, 2, 1];
let diceElements = null;


function start() {
    initializeDiceElements();
    rollDice(); // The initial roll
}

function initializeDiceElements() {
    document.getElementById("game").innerHTML = `
        ${initialDiceNums.map((num) => 
            `<div class="die card shadow-sm rounded-6 border-1"><div class="die-content card-body"><h2>${num}</h2></div></div>`
        ).join("")}
    `;
    diceElements = document.querySelectorAll(".die-content");
}

function rollDice() {
    for (i = 0; i < diceElements.length; i++) {
        rollDie(i);
    }
}
function rollDie(index) {
    if (index < 0 || index > diceElements.length) return;

    let die = diceElements[index];
    let rand = Math.floor(Math.random() * 6) + 1;
    die.innerHTML = `<h2>${rand}</h2>`;
}