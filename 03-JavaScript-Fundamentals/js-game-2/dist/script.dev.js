"use strict";

var computerChoiceDisplay = document.getElementById("computer-choice");
var playerChoiceDisplay = document.getElementById("player-choice");
var resultDisplay = document.getElementById("result");
var rock = document.getElementById("Rock");
var possibleChoices = document.querySelectorAll(".btn-choice");
var playerScore = document.querySelector("#player-score");
var computerScore = document.querySelector("#comp-score");
var resetGameBtn = document.querySelector(".btn-reset");
var gameMessageContainer = document.querySelector(".message");
var playerChoice;
var result = 0;
var playerCounter = 0;
var computerCounter = 0;
console.log(resetGameBtn);
possibleChoices.forEach(function (possibleChoices) {
  return possibleChoices.addEventListener("click", function (event) {
    playerChoice = event.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    generateComputerChoice();
    getResult();
  });
});

function generateComputerChoice() {
  var randomNumber = Math.floor(Math.random() * possibleChoices.length);

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

var timerClock = document.querySelector("#timer");
var timeSecond = 60;
timerClock.innerHTML = timeSecond;
var countDown = setInterval(function () {
  timeSecond--;
  timerClock.innerHTML = timeSecond;

  if (timeSecond <= 0) {
    clearInterval(countDown);
    gameMessageContainer.innerHTML = "<p>Game Over</p>";
  }
}, 1000);

var resetGame = function resetGame() {
  timeSecond = 10;
  playerCounter = 0;
  computerCounter = 0;
  playerScore.innerHTML = playerCounter;
  computerScore.innerHTML = computerCounter;
  gameMessageContainer.innerHTML = "";
  countDown();
};

resetGameBtn.addEventListener("click", resetGame);