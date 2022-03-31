const startButton = document.getElementById('startBtn');
startButton.addEventListener("click", initiateGame);


function initiateGame(){
   startButton.style.visibility = 'hidden';
    var ButtonsAndScore = document.getElementsByClassName('gameBtnandScore');
    var gameButtons = document.getElementsByClassName('gameButtons');
    for(i = 0; i < ButtonsAndScore.length; i+= 1){ //make game buttons/scores visible
        ButtonsAndScore[i].style.visibility = 'visible';
    }//for

    for(j = 0; j < gameButtons.length; j += 1){            //if a choice is clicked, pass to funciton to see who won
        gameButtons[j].addEventListener('click', function(){ //cant just put playerChoice up here as it will run when it compiles?
            playerChoice(this.innerHTML); //try using "this"?
        })
    }//for

}//initiateGame
function playerChoice(playerChoice){
    var playerScore = document.getElementById('playerScore')
    var compScore = document.getElementById('computerScore')
    var roundNum = document.getElementById('roundNum')
    var compChoice = computerChoice()
    console.log(playerChoice);
    console.log(compChoice);
   
        
}//startGame

function computerChoice(){
    switch(Math.floor(Math.random()*3)){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    return null;
    }//switch
}//computerChoice