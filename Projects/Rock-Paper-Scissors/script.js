const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const resetBtn = document.querySelector('.reset');
const resultsDiv = document.querySelector('.results');
const scoreDiv = document.querySelector('.score');

// Event Listeners
rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));
resetBtn.addEventListener('click', () => location.reload());

// Computer Choice
const getComputerChoice = () => {
  let computerChoice = Math.random();
  if (computerChoice < 0.34) {
    return "rock";
  } else if (computerChoice < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Declare Scores
let userScore = 0;
let computerScore = 0;

//user click handler
const handleClick = (userChoice) => {
  const computerChoice = getComputerChoice();
  const result = playRound(userChoice, computerChoice);

  resultsDiv.textContent = result;
  scoreDiv.textContent = `Score - You: ${userScore}, Computer: ${computerScore}`;

  checkWinner();
}

const checkWinner = () => {
  if (userScore === 5) {
    resultsDiv.textContent = "🎉 You reached 5 points — YOU WIN!";

    disableButtons();
  }

  if (computerScore === 5) {
    resultsDiv.textContent = "💀 Computer reached 5 points — YOU LOSE!";

    disableButtons();
  }
}

const disableButtons = () => {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

// Play the game
const playRound = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    return `You win! ${userChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${userChoice}.`;
  }
}
