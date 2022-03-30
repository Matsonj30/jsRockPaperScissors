const startButton = document.getElementById('startBtn');
startButton.addEventListener("click", initiateGame);

function initiateGame(){
    var gameButtons = document.getElementsByClassName('gameBtnScore');
    for(i = 0; i < gameButtons.length; i+= 1){
        for(j = 0; j < i; j+= 1);
        console.log(gameButtons[i]);
        //gameButtons[i].style.visibility = visible;
    }//for
}