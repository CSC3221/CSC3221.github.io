const htmlColors = [
    "Black", "Blue", "BlueViolet",
    "Brown", "Gold", "Gray",
    "Green", "Lime", "Magenta",
    "Orange", "Pink", "Purple",
    "Red", "SeaGreen", "SeaShell",
    "SkyBlue", "Teal", "Turquoise",
    "Violet", "White", "Yellow"
];

const attemptBtn = document.getElementById("attemptBtn");
const correctColorDiv = document.getElementById("correctColor");
const messageDiv = document.getElementById("message");
const scoreDiv = document.getElementById("score");

let currentColor = "";

function showMessage(message){
    messageDiv.textContent = message;
}

function showScore(score){
    scoreDiv.textContent = score;
}


function getRandomColor(){
    correctColor.style.backgroundColor = htmlColors[Math.floor(Math.random() * htmlColors.length)];
    correctColorDiv.style.backgroundColor = correctColor;
}

attemptBtn.addEventListener("click", function(){
    const guess = prompt("Guess the color: ")
    let attempt = 3;
    let score = 0;

    if ((guess && guess.toLowerCase() === currentColor.toLowerCase()) && attempt === 3) {
        showMessage("Correct");
        score += 100;
        showScore(score);
    } else if ((guess && guess.toLowerCase() === currentColor.toLowerCase()) && attempt === 2) {
        showMessage("Correct");
        score += 50;
        showScore(score);
    } else if ((guess && guess.toLowerCase() === currentColor.toLowerCase()) && attempt === 1) {
        showMessage("Correct");
        score += 10;
        showScore(score);
    } else {
        showMessage("Wrong! It was " + currentColor);
        attempt -= 1;
    }

    if (attempt === 0){
        showMessage("Game Over");
        return showScore(score);
    }
})

getRandomColor();