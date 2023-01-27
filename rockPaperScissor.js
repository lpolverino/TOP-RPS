/*
a rock paper and scissor game against the machine
*/
const choices = ["rock", "paper", "scissors"];


function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    compChoice = choices[compChoice];
    return compChoice;
}

function playRound( playerChoice,computerChoice){
    const results = document.querySelector('.results');
    const marker = document.querySelector('#end-results');
    marker.innerText = `${playerChoice} vs ${computerChoice}`;

    const playerPar = document.querySelector('#player');
    const computerPar = document.querySelector('#computer');

    playerChoice = playerChoice.toLowerCase();
    if(playerChoice ==="rock" && computerChoice !=="rock"){
        if(computerChoice==="paper"){
            computerScore++;
        }else{
            playerScore++;
        }
    }else if(playerChoice ==="paper" && computerChoice !=="paper"){
        if(computerChoice==="scissors"){
            computerScore++;
        }else{
            playerScore++;
        }
    }else if(playerChoice ==="scissors" && computerChoice !=="scissors"){
        if(computerChoice==="rock"){
            computerScore++;
        }else{
            playerScore++;
        }
    }
    playerPar.innerText = playerPar.innerText.slice(0,-1) + playerScore;
    computerPar.innerText = computerPar.innerText.slice(0, -1) + computerScore

    //will not reset markers
    if(playerScore === 5 || computerScore ===5){
        const winner = document.createElement('p')
        winner.innerText = `${playerScore === 5 ? "Player" : "Computer"} WIN'S!`
        results.appendChild(winner);
    }
}

/*function game(){
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

game();*/

const buttons = document.querySelectorAll('.btn');
let playerScore = 0;
let computerScore =0;

buttons.forEach((button) => {
    button.addEventListener('click', () => playRound(button.innerText,getComputerChoice()));
}

);