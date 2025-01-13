// Some variables

let humanScore = 0;
let computerScore = 0;


// write a function to randomly return one of the following strings: 'rock', 'paper', or 'scissor'

function getComputerChoice() {
    // store a variable with the computer's random choice
    let computerChoice = Math.random();
    // write a condition to explain to the computer to select 1 of the 3 choices based on the random result
    if (computerChoice <= 0.33 ) {
        return ('Rock');
    } else if (computerChoice >= 0.34 && computerChoice <= 0.67) {
        return ('Paper');
    } else {
        return ('Scissor');
    }
}
// write a function to prompt, save, and return a user input

function getHumanChoice() {
    let humanChoice = prompt('Please choose your weapon');

    if (humanChoice === 'rock') {
        return ('Rock');
    } else if (humanChoice === 'paper') {
        return ('Paper');
    } else if (humanChoice === 'scissors') {
        return ('Scissors');
    } else {
        return ('That is not a valid weapon choice');
    }
}

