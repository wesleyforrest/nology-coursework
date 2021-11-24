const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll(".btn-choice");
let playerChoice;
let result = 0;
let rock = document.getElementById("Rock");
let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#comp-score");
let playerCounter = 0;
let computerCounter = 0;

//const randomNumber = Math.random() * possibleChoices.length;

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

function getResult() {
  if (computerChoice === playerChoice) {
    result = "It's a Draw!";
  }
  if (computerChoice === "Rock" && playerChoice === "Paper") {
    result = "Player Wins!";
  }
  if (computerChoice === "Rock" && playerChoice === "Scissors") {
    result = "Player loses!";
  }
  if (computerChoice === "Paper" && playerChoice === "Scissors") {
    result = "Player Wins!";
  }
  if (computerChoice === "Paper" && playerChoice === "Rock") {
    result = "Player loses!";
  }
  if (computerChoice === "Scissors" && playerChoice === "Rock") {
    result = "Player Wins!";
  }
  if (computerChoice === "Scissors" && playerChoice === "Paper") {
    result = "Player loses!";
  }
  resultDisplay.innerHTML = result;
}

const timerClock = document.querySelector("#timer");
let timeSecond = 60;

timerClock.innerHTML = timeSecond;

let countDown = setInterval(() => {
  timeSecond--;
  timerClock.innerHTML = timeSecond;
  console.log(timeSecond);
  if (timeSecond <= 0) {
    clearInterval(countDown);
  }
}, 1000);

//playerScore.innerHTML = "CHEESE";

function scoreCounter() {
  if (result == "Player Wins!") {
    playerCounter++;
    playerScore.innerHTML = playerCounter;
  } else if (result == "Player loses!") {
    computerCounter++;
    computerScore.innerHTML = computerCounter;
  }
}
