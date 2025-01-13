// Some variables

let humanScore = 0;
let computerScore = 0;




// write a function to randomly return one of the following strings: 'rock', 'paper', or 'scissors'
// could probably update this to shift the range +3 and then use Math.floor

function getComputerChoice() {
    // store a variable with the computer's random choice
    let computerChoice = Math.random();
    // write a condition to explain to the computer to select 1 of the 3 choices based on the random result
    if (computerChoice <= 0.33 ) {
        return ('rock');
    } else if (computerChoice >= 0.34 && computerChoice <= 0.67) {
        return ('paper');
    } else {
        return ('scissors');
    }
}

// write a function to prompt, save, and return a user input

function getHumanChoice() {
    let humanChoice = prompt('Please choose your weapon');
    let userInput = humanChoice.toLowerCase();

    if (userInput === 'rock') {
        return ('rock');
    } else if (userInput === 'paper') {
        return ('paper');
    } else if (userInput === 'scissors') {
        return ('scissors');
    } else {
        return ('That is not a valid weapon choice');
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// this function should pin both human and computer results against each other and determine a winner

function playRound(humanChoice, computerChoice) {
   let compInput = computerChoice.toLowerCase();

    if (humanChoice === compInput) {
        console.log(`It's a tie!`);
    } else if (humanChoice === 'rock' && compInput === 'paper') {
        console.log('You lose! Paper beats rock!');
    } else if (humanChoice === 'rock' && compInput === 'scissors') {
        console.log('You win! Rock beats scissors!');
    } else if (humanChoice === 'paper' && compInput === 'rock') {
        console.log('You win! Paper beats rock!');
    }  else if (humanChoice === 'paper' && compInput === 'scissors') {
        console.log('You lose! Scissors beats paper!');
    } else if (humanChoice === 'scissors' && compInput === 'rock') {
        console.log('You lose! Rock beats scissors!');
    } else {
        console.log('You win! Scissors beats paper!');
    }
}

playRound(humanSelection, computerSelection);

// define a function that will assign a value depending on the output of the round

function getWinner() {
    if (playRound() === 'You win! Rock beats scissors!' || 'You win! Paper beats rock!' || 'You win! Scissors beats paper!') {
        return 1;
    } else if (playRound() === 'You lose! Paper beats rock!' || 'You lose! Scissors beats paper!' || 'You lose! Rock beats scissors!') {
        return 2;
    }  else {
        return 3
    }
} 

// this function should update the score counter after checking the value of getWinner()

function updateScore() {
    if (getWinner === 1) {
        humanScore++;
    } else if ( getWinner === 2) {
        computerScore++;
    } else {

    }

    // console.log(` Your score: ${humanScore}`);
    // console.log(`Computer's score: ${computerScore}`);
}
