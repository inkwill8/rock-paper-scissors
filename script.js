// write a function to randomly return one of the following strings: 'rock', 'paper', or 'scissor'

function getComputerChoice() {
    // store a variable with the computer's random choice
    let computerChoice = Math.random();
    // write a condition to explain to the computer to select 1 of the 3 choices based on the random result
    if (computerChoice <= 0.33 ) {
        console.log('Rock');
    } else if (computerChoice >= 0.34 && computerChoice <= 0.66) {
        console.log('Paper');
    } else {
        console.log('Scissor');
    }
}

getComputerChoice();