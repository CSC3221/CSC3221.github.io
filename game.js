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
let attempt = 3;
let score = 0;

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
    const guess = prompt("Guess the color: ")

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

        if(attempt === 0){
            showMessage("Game Over! Final score: " + score);
        }
    }

    showScore(score);
})

getRandomColor();
showScore(score);