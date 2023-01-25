/*
a rock paper and scissor game against the machine
*/
const choices = ["rock", "paper", "scissors"];


function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    compChoice = choices[compChoice];
    console.log(compChoice);
    return compChoice;
}

function playRound( playerChoice,computerChoice){
    playerChoice = playerChoice.toLowerCase();
    if(playerChoice ==="rock" && computerChoice !=="rock"){
        if(computerChoice==="paper"){
            return 0
        }else{
            return 1
        }
    }else if(playerChoice ==="paper" && computerChoice !=="paper"){
        if(computerChoice==="scissors"){
            return 0
        }else{
            return 1
        }
    }else if(playerChoice ==="scissors" && computerChoice !=="scissors"){
        if(computerChoice==="rock"){
            return 0
        }else{
            return 1
        }
    }else{
        return 0
    }

}

function game(){
    let win_counts = 0;
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Choince between: rock, paper, scissors")
        let result = playRound(playerSelection.toLocaleLowerCase(), getComputerChoice());
        console.log(result);
        win_counts += result;
    }
    if(win_counts>2){
        console.log("You Win!")
    }else{
        console.log("You Lose!")
    }
}

game();