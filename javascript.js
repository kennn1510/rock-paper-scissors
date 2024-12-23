let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
}
// console.log(getComputerChoice());

/*
Create function called getHumanChoice
Create variable to store user input
Prompt user's input(string), recommend words like "rock", "paper", or "scissors"
Return user's input
Log function to test it
*/
function getHumanChoice() {
  let userInput = prompt("Type your choice of either rock, paper, or scissors");
  return userInput;
}
// console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    return "A tie! " + humanChoice + " ties with " + computerChoice;
  } else if (
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return console.log("You win! " + humanChoice + " beats " + computerChoice);
  } else if (
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "rock" && computerChoice === "paper")
  ) {
    computerScore++;
    return console.log("You lose! " + computerChoice + " beats " + humanChoice);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
