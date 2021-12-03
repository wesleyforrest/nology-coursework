const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
let rock = document.getElementById("Rock");
const possibleChoices = document.querySelectorAll(".btn-choice");
let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#comp-score");
const resetGameBtn = document.querySelector(".btn-reset");
const gameMessageContainer = document.querySelector(".message");

let playerChoice;
let result = 0;
let playerCounter = 0;
let computerCounter = 0;

console.log(resetGameBtn);

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (event) => {
    playerChoice = event.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);

  if (randomNumber === 1) {
    computerChoice = "Rock";
  }
  if (randomNumber === 2) {
    computerChoice = "Scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "Paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function updatePlayerCounter() {
  playerCounter++;
  playerScore.innerHTML = playerCounter;
}

function updateCompCounter() {
  computerCounter++;
  computerScore.innerHTML = computerCounter;
}

function getResult() {
  if (computerChoice === playerChoice) {
    result = "It's a Draw!";
  }
  if (computerChoice === "Rock" && playerChoice === "Paper") {
    result = "Player Wins!";
    updatePlayerCounter();
  }
  if (computerChoice === "Rock" && playerChoice === "Scissors") {
    result = "Player loses!";
    updateCompCounter();
  }
  if (computerChoice === "Paper" && playerChoice === "Scissors") {
    result = "Player Wins!";
    updatePlayerCounter();
  }
  if (computerChoice === "Paper" && playerChoice === "Rock") {
    result = "Player loses!";
    updateCompCounter();
  }
  if (computerChoice === "Scissors" && playerChoice === "Rock") {
    result = "Player Wins!";
    updatePlayerCounter();
  }
  if (computerChoice === "Scissors" && playerChoice === "Paper") {
    result = "Player loses!";
    updateCompCounter();
  }
  resultDisplay.innerHTML = result;
}

const timerClock = document.querySelector("#timer");
let timeSecond = 60;

timerClock.innerHTML = timeSecond;

let countDown = setInterval(() => {
  timeSecond--;
  timerClock.innerHTML = timeSecond;
  if (timeSecond <= 0) {
    clearInterval(countDown);

    gameMessageContainer.innerHTML = `<p>Game Over</p>`;
  }
}, 1000);

const resetGame = () => {
  timeSecond = 10;
  playerCounter = 0;
  computerCounter = 0;
  playerScore.innerHTML = playerCounter;
  computerScore.innerHTML = computerCounter;
  gameMessageContainer.innerHTML = "";
  countDown();
};
resetGameBtn.addEventListener("click", resetGame);
