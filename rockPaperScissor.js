/*
a rock paper and scissor game against the machine
*/
const choices = ["rock", "paper", "scissors"];


function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    console.log(compChoice);
    compChoice = choices[compChoice];
    console.log(compChoice);
    return compChoice;
}

function playRound( playerChoice,computerChoice){
    playerChoice = playerChoice.toLowerCase();
    if(playerChoice ==="rock" && computerChoice !=="rock"){
        if(computerChoice==="paper"){
            return "You Lose!, Paper beats Rock"
        }else{
            return "You Win!, Rock beats Scissors"
        }
    }else if(playerChoice ==="paper" && computerChoice !=="paper"){
        if(computerChoice==="scissors"){
            return "You Lose!, Scissors beats Paper"
        }else{
            return "You Win!, Paper beats Rock"
        }
    }else if(playerChoice ==="scissors" && computerChoice !=="scissors"){
        if(computerChoice==="rock"){
            return "You Lose!, Rock beats Scissors"
        }else{
            return "You Win!, Scissors beats Paper"
        }
    }else{
        return "DRAW!"
    }

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));