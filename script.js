// Some variables
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
const ROUNDS_TO_WIN = 5;

// DOM
const display = document.querySelector('div');
const buttons = document.getElementsByClassName('btn');

// Add event listeners to buttons
for (const btn of buttons) {
    btn.addEventListener('click', (event) => {
        if (roundCount < ROUNDS_TO_WIN) {
            playGame(event.currentTarget.value);
        }
    });
}

function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice <= 0.33) {
        return 'rock';
    } else if (computerChoice <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `It's a tie! You both chose ${humanChoice}.`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}!`;
    } else {
        computerScore++;
        return `Computer wins! ${computerChoice} beats ${humanChoice}!`;
    }
}

function displayResults(roundResult) {
    const roundInfo = document.createElement('p');
    roundInfo.textContent = `Round ${roundCount}: ${roundResult}`;
    
    const scoreInfo = document.createElement('p');
    scoreInfo.textContent = `Score - You: ${humanScore} Computer: ${computerScore}`;
    
    display.appendChild(roundInfo);
    display.appendChild(scoreInfo);
    
    if (roundCount === ROUNDS_TO_WIN) {
        const gameResult = document.createElement('h2');
        gameResult.textContent = getGameWinner();
        display.appendChild(gameResult);
        
        // Disable buttons after game is over
        for (const btn of buttons) {
            btn.disabled = true;
        }
    }
}

function getGameWinner() {
    if (humanScore > computerScore) {
        return 'Congratulations! You won the game!';
    } else if (computerScore > humanScore) {
        return 'Game Over! Computer wins!';
    } else {
        return "It's a tie game!";
    }
}

function playGame(humanChoice) {
    roundCount++;
    const computerChoice = getComputerChoice();
    const roundResult = playRound(humanChoice, computerChoice);
    displayResults(roundResult);
}