// Computer Choice
const getComputerChoice = () => {
  let computerChoice = Math.random();
  if (computerChoice < 0.34) {
    return "rock";
  } else if (computerChoice > 0.34 && computerChoice < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Human/User Choice
const getUserChoice = () => {
  let userChoice = prompt("Enter rock, paper, or scissors:");
  userChoice = userChoice.toLowerCase();
  return userChoice;
}

//Declare Players Scores
let userScore = 0;
let computerScore = 0;

const humanSelection = getUserChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

const playGame = () => {
  // Play Game Function
  const playRound = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
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