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
        gameButtons[j].addEventListener('click', function(){ //cant just put playerChoice up here as it will call when it compiles?
            playerChoice(this.innerHTML.toLowerCase()); //lowercase is easier to match
        })
    }//for

}//initiateGame
function playerChoice(playerChoice){
    console.log(playerChoice);
    var compChoice = computerChoice()
    console.log(compChoice);

    if(playerChoice == compChoice){
        changeScore('tie');
    }//if

    else{
        if(playerChoice == 'rock'){ //rock
            if(compChoice == 'paper'){
                changeScore('lose');
            }//if
            else{
                changeScore('win');
            }//else
        }//if Rock


        else if(playerChoice == 'paper'){ //paper
            if(compChoice == 'scissors'){
                changeScore('lose');
            }//if
            else{
                changeScore('win');
            }//else
        }//elif Paper


        else{                             //scissors
            if(compChoice == 'rock'){
                changeScore('lose');
            }//if
            else{
                changeScore('win');
            }//inner else
        }//else

    }//outer else
    
       
}//startGame

function computerChoice(){
    switch(Math.floor(Math.random()*3)){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }//switch
}//computerChoice

function changeScore(outcome){
  var playerScore = document.getElementById('playerScore');
  var compScore = document.getElementById('computerScore');
  var roundNum = document.getElementById('roundNum');
  console.log(outcome);
  if(outcome == 'win'){
    playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
  }//if
  else if(outcome == 'lose'){
   compScore.innerHTML = parseInt(compScore.innerHTML) + 1;
  }//elif
  roundNum.innerHTML = parseInt(roundNum.innerHTML) + 1;
}