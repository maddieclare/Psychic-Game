// variable containing all letters of the alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz";

// compChoice and userGuess variables need declaring outside of function
var compChoice;
var userGuess;

// array tracking letters player has previously guessed
var lettersGuessed = [];

// variable tracking number of player guesses remaining
var guessesLeft = 9;

// variable tracking player wins
var playerWins = 0;

// variable tracking player losses
var playerLosses = 0;

// for variable logging in HTML
function getStats() {
  document.getElementById("playerWins").innerHTML = "Wins: " + playerWins;
  document.getElementById("playerLosses").innerHTML = "Losses: " + playerLosses;
  document.getElementById("guessesLeft").innerHTML =
    "Guesses left: " + guessesLeft;
  document.getElementById("lettersGuessed").innerHTML =
    "Your guesses so far: " + lettersGuessed;
}

// selects character at random from alphabet variable
function compSelect() {
  compChoice = alphabet.charAt(Math.random() * 26);
  console.log("Computer's selection: " + compChoice);
}

// prevents player from guessing the same letter twice
function doubleGuess() {
  alert("You've already guessed that letter!");
}

// prevents any non-alphabetical key from being counted as a guess
function notLetter() {
  alert("Please choose a valid letter.");
}

// pushes valid player guesses to lettersGuessed array
function letterTrack() {
  lettersGuessed.push(userGuess);
  guessesLeft -= 1;
  console.log("Letters guessed: " + lettersGuessed);
}

// decreases guessesLeft variable by 1 after each valid (incorrect) user guess
function guessCounter() {
  console.log("Guesses left: " + guessesLeft);
}

// player lose condition
function playerLoss() {
  alert("You lose :(");
  playerLosses += 1;
  lettersGuessed = [];
  guessesLeft = 9;
  console.clear();
  console.log("Player losses: " + playerLosses);
  console.log("Player wins: " + playerWins);
}

// player win condition
function playerWin() {
  alert("You win!");
  playerWins += 1;
  lettersGuessed = [];
  guessesLeft = 9;
  console.clear();
  console.log("Player wins: " + playerWins);
  console.log("Player losses: " + playerLosses);
}

compSelect();

// player can guess any letter of the alphabet by pressing the corresponding key
document.onkeyup = function(selection) {
  // key press adds letter to variable
  userGuess = selection.key;
  console.log("Player guess: " + userGuess);

  if (userGuess == compChoice) {
    playerWin();
    compSelect();
  } else if (alphabet.search(/abcdefghijklmnopqrstuvwxyz/i) == -1) {
    notLetter();
  } else if (lettersGuessed.indexOf(userGuess) !== -1) {
    doubleGuess();
  } else if (guessesLeft == 1) {
    playerLoss();
    compSelect();
  } else {
    letterTrack();
  }

  guessCounter();
};
