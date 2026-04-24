const htmlColors = [
    "Black", "Blue", "BlueViolet",
    "Brown", "Gold", "Gray",
    "Green", "Lime", "Magenta",
    "Orange", "Pink", "Purple",
    "Red", "SeaGreen", "SeaShell",
    "SkyBlue", "Teal", "Turquoise",
    "Violet", "White", "Yellow"
];

const attempt = document.getElementById("attemptBtn");
const correctColor = document.getElementById("correctColor");
const messageDiv = document.getElementById("message");
const score = document.getElementById("score");

function showMessage(message){
    messageDiv.textContent = message;
}


function getRandomColor(){
    correctColor.style.backgroundColor = htmlColors[Math.floor(Math.random * htmlColors.lentgh)];
}

function attempt(){
    let lives = 3;

    if(attempt === correctColor){
        showMessage("Correct");

    }
}

getRandomColor();