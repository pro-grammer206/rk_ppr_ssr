//controls
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

//display
const user = document.getElementById("user");
const computer = document.getElementById("computer");
const result = document.getElementById("result");

//clear nodes
function clearNodes() {
  if (user.hasChildNodes()) {
    for (let node of user.childNodes) {
      node.remove();
    }
  }
  if (computer.hasChildNodes()) {
    for (let node of computer.childNodes) {
      node.remove();
    }
  }
}
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
function play(playerSelection) {
  const computerSelection = getComputerChoice();
  const imgPlayer = document.createElement("img");
  const imgComp = document.createElement("img");
  imgPlayer.setAttribute("src", `/assets/${playerSelection}.svg`);
  imgPlayer.setAttribute("width", "100");
  imgPlayer.setAttribute("height", "100");
  user.appendChild(imgPlayer);
  imgComp.setAttribute("src", `/assets/${computerSelection}.svg`);
  imgComp.setAttribute("width", "100");
  imgComp.setAttribute("height", "100");
  computer.appendChild(imgComp);

  //   console.log(` player:${playerSelection}  computer:${computerSelection}`);
  score = calculateScore(playerSelection, computerSelection);
  result.textContent = score;
}

//event listener
const choiceButtons = document.querySelectorAll(".interface button");
choiceButtons.forEach(function (button) {
  button.addEventListener("click", (e) => {
    play(e.target.id);
    clearNodes();
  });
});
