const image = document.querySelector('#image');
const redScore = document.querySelector('#red');
const blueScore = document.querySelector('#blue');
const redButton = document.querySelector('#redButton');
const blueButton = document.querySelector('#blueButton');
const reset = document.querySelector('#resetButton');
const playTo = document.querySelector('#select');
redScore.value = 0;
blueScore.value = 0;
let winningScore = 3;
let gameIsOver = false;

redButton.addEventListener('click', function(){
    if(!gameIsOver){
        redScore.value = redScore.value +1;
        redScore.textContent = redScore.value;
    if (winningScore === redScore.value){
        redButton.disabled = true;
        blueButton.disabled = true;
        image.src ="pokalred.png";
    }}
})

blueButton.addEventListener('click', function(){
    if(!gameIsOver){
        blueScore.value = blueScore.value +1;
        blueScore.textContent = blueScore.value;
    if(winningScore === blueScore.value){
        redButton.disabled = true;
        blueButton.disabled = true;
        image.src ="pokalblue.png";
    }}
})

reset.addEventListener('click', resetGame);

function resetGame(){
    redButton.disabled = false;
    blueButton.disabled = false;
    redScore.value = 0;
    blueScore.value = 0;
    redScore.innerText = 0;
    blueScore.innerText = 0;
    image.src="tennis.png";
}

playTo.addEventListener('change', function(){
    winningScore = parseInt(playTo.value);
    resetGame();
})
