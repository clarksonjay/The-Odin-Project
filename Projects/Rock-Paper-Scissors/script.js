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

// Human Choice
const getUserChoice = () => {
  let userChoice = prompt("Enter rock, paper, or scissors:");
  userChoice = userChoice.toLowerCase();

  while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
    userChoice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
  }

  return userChoice;
}


// Declare Scores
let userScore = 0;
let computerScore = 0;

// Play the game
const playGame = () => {

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

  for (let i = 0; i < 5; i++) {
    const humanSelection = getUserChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
  }

  console.log(`Final Scores - You: ${userScore}, Computer: ${computerScore}`);
}

playGame();
