// Some variables

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


// write a function to randomly return one of the following strings: 'rock', 'paper', or 'scissors'

function getComputerChoice() {
    // store a variable with the computer's random choice
    let computerChoice = Math.random();
    // write a condition to explain to the computer to select 1 of the 3 choices based on the random result
    if (computerChoice <= 0.33 ) {
        return ('Rock');
    } else if (computerChoice >= 0.34 && computerChoice <= 0.67) {
        return ('Paper');
    } else {
        return ('Scissors');
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

// this function should pin both human and computer results against each other and determine a winner

function playRound(humanChoice, computerChoice) {
   let userInput = humanChoice.toLowerCase();
   let compInput = computerChoice.toLowerCase();

    if (userInput === compInput) {
        console.log(`It's a tie!`);
    } else if (userInput === 'rock' && compInput === 'paper') {
        console.log('You lose! Paper beats rock!');
    } else if (userInput === 'rock' && compInput === 'scissors') {
        console.log('You win! Rock beats scissors!')
    } else if (userInput === 'paper' && compInput === 'rock') {
        console.log('You win! Paper beats rock!');
    }  else if (userInput === 'paper' && compInput === 'scissors') {
        console.log('You lose! Scissors beats paper!');
    } else if (userInput === 'scissors' && compInput === 'rock') {
        console.log('You lose! Rock beats scissors!');
    } else {
        console.log('You win! Scissors beats paper!');
    }
}



playRound(humanSelection, computerSelection);

