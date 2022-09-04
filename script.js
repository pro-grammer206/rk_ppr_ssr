const choices = ["rock", "paper", "scissor"];
let score = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function calculateScore(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "paper":
        score = score === 0 ? 0 : score - 1;
        break;
      case "scissor":
        score = score + 1;
        break;
      case "rock":
        break;
    }
  }

  if (playerSelection === "paper") {
    switch (computerSelection) {
      case "paper":
        break;
      case "scissor":
        score = score === 0 ? 0 : score - 1;
        break;
      case "rock":
        score = score + 1;
        break;
    }
  }
  if (playerSelection === "scissor") {
    switch (computerSelection) {
      case "paper":
        score = score + 1;
        break;
      case "scissor":
        break;
      case "rock":
        score = score === 0 ? 0 : score - 1;
        break;
    }
  }
  return score;
}
function playRound() {
  const playerSelection = prompt("Enter your choice").toLowerCase();
  const computerSelection = getComputerChoice();
  console.log(` player:${playerSelection}  computer:${computerSelection}`);
  score = calculateScore(playerSelection, computerSelection);
  console.log(score);
}
function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  console.log(score >= 3 ? `you win ${score}` : `you lose ${score}`);
}
playGame();
