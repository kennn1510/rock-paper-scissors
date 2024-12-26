let gameOver = false;
let humanScore = 0;
let computerScore = 0;
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const restartBtn = document.querySelector("#restart");
const runningScore = document.querySelector("#running-score");
const div = document.querySelector("#container");

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
}
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    ++humanScore;
  } else if (
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "rock" && computerChoice === "paper")
  ) {
    ++computerScore;
  }
  runningScore.textContent = `Your score: ${humanScore} vs. Computer score: ${computerScore}`;
  div.style.background = "yellow";
  if (humanScore >= 5) {
    runningScore.textContent = `You win! Your score: ${humanScore}, Opponent score: ${computerScore}`;
    div.style.background = "green";
    gameOver = true;
  } else if (computerScore >= 5) {
    runningScore.textContent = `You lose! Your score: ${humanScore}, Opponent score: ${computerScore}`;
    div.style.background = "red";
    gameOver = true;
  }
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function playGame() {
  rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
  });
  paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
  });
  scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
  });
  restartBtn.addEventListener("click", () => {
    gameOver = false;
    humanScore = 0;
    computerScore = 0;
    runningScore.textContent = "Running Score:";
    div.style.background = "white";
  });
}
if (gameOver === false) playGame();
