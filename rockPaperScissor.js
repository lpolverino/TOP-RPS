/*
a rock paper and scissor game against the machine
*/
const choices = ['rock', 'paper', 'scissors'];


function getComputerChoice() {
    /*
    get the random value
    log the awnser
    and the return it 
    */
    let compChoice = Math.floor(Math.random() * 3);
    console.log(compChoice);
    compChoice = choices[compChoice];
    console.log(compChoice);
    return compChoice;
}

getComputerChoice();