# rock-paper-scissors
The Odin Project - Rock Paper Scissor

This is the first JavaScript project in the Foundations course in the Odin Project.

The goal is to practice thinking like a programmer by breaking up large problems into smaller,
 sub-problems. The goal is to start with writing pseudo-code and then write the code and test
  the logic.

  ### Bugs to Fix

  - I'm getting an uncaught TypeError on line 44 when humanChoice is changed to lowercase. I only see this when I try to log playRound()'s value manually.

  - When I input an all caps string, I am getting the 

```javascript
  else {
        console.log('You win! Scissors beats paper!');
    }
```
thrown automatically.
    - Not sure if the updateScore() function is actually incrementing the scores since every time I log the values of humanScore and computerScore after a round, they're both still 0.