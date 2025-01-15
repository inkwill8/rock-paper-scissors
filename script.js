function playGame() {



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
        console.log('That is not a valid choice');
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// this function should pin both human and computer results against each other and determine a winner

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return (`It's a tie!`);
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        return ('You lose! Paper beats rock!');
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        return ('You win! Rock beats scissors!');
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        return ('You win! Paper beats rock!');
    }  else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        return ('You lose! Scissors beats paper!');
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        return ('You lose! Rock beats scissors!');
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        return ('You win! Scissors beats paper!');
    } else {

    }
}

let roundResult = playRound(humanSelection, computerSelection);

console.log(roundResult);

let winner = getWinner(roundResult);

// define a function that will assign a value depending on the output of the round

function getWinner(outputString) {
    if (outputString === 'You win! Rock beats scissors!' ||
        outputString === 'You win! Paper beats rock!' ||
        outputString === 'You win! Scissors beats paper!') {
        return 1;
    } else if (outputString === 'You lose! Paper beats rock!' || 
        outputString === 'You lose! Scissors beats paper!' || 
        outputString === 'You lose! Rock beats scissors!') {
        return 2;
    }  else {
        return 3;
    }
}

// this function should update the score counter after checking the value of getWinner()

function updateScore(result) {
    if (result === 1) {
        ++humanScore;
    } else if (result === 2) {
        ++computerScore;
    } else {

    }
}

// plug the numerical winner value into the updateScore() function to determine which score to increment

updateScore(winner);

// log the updated scores to the console

console.log(`Your score: ${humanScore}`);
console.log(`Computer's score: ${computerScore}`);

}

// loop through this 5 times

for (let i = 0; i < 5; i++) {
    playGame();
}