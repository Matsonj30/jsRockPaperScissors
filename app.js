const startButton = document.getElementById('startBtn');
startButton.addEventListener("click", initiateGame);
console.log(startButton.innerHTML)
function initiateGame(){
    startButton.style.visibility = 'hidden';
    var gameButtons = document.getElementsByClassName('gameBtnandScore');
    for(i = 0; i < gameButtons.length; i+= 1){
        for(j = 0; j < i; j+= 1);
        gameButtons[i].style.visibility = 'visible';
    }//for
}