// var containing letters of the alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz";

// array keeping track of letters that player has guessed
var lettersGuessed = [];

// var with number of guesses allowed
var guessesLeft = 9;

// var counting player wins
var playerWins = 0;

// var counting player losses
var playerLosses = 0;

// for stats display via HTML
function playerStats() {
  document.getElementById("playerWins").textContent = "Wins: " + playerWins;
  document.getElementById("playerLosses").textContent =
    "Losses: " + playerLosses;
  document.getElementById("guessesLeft").textContent =
    "Guesses left: " + guessesLeft;
  document.getElementById("lettersGuessed").textContent =
    "Your guesses so far: " + lettersGuessed;
}

// computer selects letter at random and stores in compChoice variable
function compSelect() {
  var compChoice = alphabet.charAt(Math.random() * 26);
  console.log("Computer's selection: " + compChoice);
}

// function preventing player from guessing the same letter twice
function doubleGuess() {
  alert("You've already guessed that letter!");
  return;
}

// function preventing any non-alphabetical key from being counted as a guess
function notLetter() {
  alert("Please guess a valid letter of the alphabet.");
  return;
}

// pushes valid player guesses to lettersGuessed array
function letterTrack() {
  lettersGuessed.push(userGuess);
  console.log("Letters guessed: " + lettersGuessed);
}

// after each valid user guess, guessesLeft variable decreases by 1
function guessCounter() {
  guessesLeft -= 1;
  console.log("Guesses left: " + guessesLeft);
}

// player lose condition
function playerLoss() {
  alert("You lose :(");
  playerLosses += 1;
  lettersGuessed = [];
  guessesLeft = 9;
  console.log(playerLosses);
}

// player win condition
function playerWin() {
  alert("You win!");
  playerWins += 1;
  lettersGuessed = [];
  guessesLeft = 9;
  console.log(playerWins);
}

compSelect();

// player can guess any letter of the alphabet by pressing the corresponding key
document.onkeyup = function(selection) {
  // key press adds letter to var
  var userGuess = selection.key.toLowerCase();
  console.log("Player guess: " + userGuess);
  
  if (alphabet.search(userGuess) == -1) {
    doubleGuess();
  } else if (lettersGuessed.indexOf(userGuess) !== -1) {
    notLetter();
  } else if (userGuess == compChoice) {
    playerWin();
  } else if (guessesLeft == 0) {
    playerLoss();
  } else {
    letterTrack();
  }
};
