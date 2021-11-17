"use strict";

var computerChoiceDisplay = document.getElementById("computer-choice");
var playerChoiceDisplay = document.getElementById("player-choice");
var resultDisplay = document.getElementById("result");
var possibleChoices = document.querySelectorAll(".btn-choice");
var playerChoice;
var result;
var rock = document.getElementById("Rock");
var playerScore = document.getElementById("#player-score");
var computerScore = document.getElementById("#computer-score");
var playerCounter = 0;
var computerCounter = 0; //const randomNumber = Math.random() * possibleChoices.length;

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

if (result === "Player Wins!") {
  playerCounter++;
  playerScore.innerHTML = playerCounter;
} else if (result === "Player loses!") {
  computerCounter++;
  computerScore.innerHTML = computerScore;
}