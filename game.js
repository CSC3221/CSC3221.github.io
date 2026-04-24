const htmlColors = [
    "Black", "Blue",
    "Brown", "Gold",
    "Gray", "Green",
    "Lime", "Magenta",
    "Orange", "Pink",
    "Purple", "Red",
    "SkyBlue", "Teal",
    "Violet", "White",
    "Yellow"
];

const attemptBtn = document.getElementById("attemptBtn");
const correctColorDiv = document.getElementById("correctColor");
const messageDiv = document.getElementById("message");
const scoreDiv = document.getElementById("score");
const endBtn = document.getElementById("endBtn");
const startBtn = document.getElementById("startBtn");

let currentColor = "";
let attempt = 3;
let score = 0;
let gameOver = true;

function showGameButtons() {
    attemptBtn.classList.remove("d-none");
    endBtn.classList.remove("d-none");
    startBtn.classList.add("d-none");
}

function hideGameButtons() {
    attemptBtn.classList.add("d-none");
    endBtn.classList.add("d-none");
    startBtn.classList.remove("d-none");
}

function showMessage(message){
    messageDiv.textContent = message;
}

function showScore(score){
    scoreDiv.textContent = "Score: " + score;
}

function getRandomColor(){
    currentColor = htmlColors[Math.floor(Math.random() * htmlColors.length)];
    correctColorDiv.style.backgroundColor = currentColor;
}

attemptBtn.addEventListener("click", function(){
    if (gameOver) {
        showMessage("Game Over! Final score: " + score);
        return;
    }

    const guess = prompt("Guess the color: ")

    if(!guess){
        return;
    }

    if (guess.toLowerCase() === currentColor.toLowerCase()) {
        showMessage("Correct");
        
        if(attempt === 3) score += 100;
        else if (attempt === 2) score += 50;
        else score += 10;

        attempt = 3;
        getRandomColor();
    } else {
        attempt--;
        showMessage(("Wrong! Attempts remaining: " + attempt));
        getRandomColor();

        if(attempt === 0){
            gameOver = true;
            showMessage("Game Over! Final score: " + score);
        }
    }

    showScore(score);
})

endBtn.addEventListener("click", function () {
    gameOver = true;
    attempt = 3;

    showMessage("Game Over! Final score: " + score);
    
    hideGameButtons();
});

startBtn.addEventListener("click", function () {
    gameOver = false;
    attempt = 3;
    score = 0;

    showMessage("Game Started!");
    showScore(score);
    getRandomColor();

    showGameButtons();
});

hideGameButtons();
gameOver = true;