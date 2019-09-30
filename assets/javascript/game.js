// variable containing all letters of the alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz";

// array tracking letters player has previously guessed
var lettersGuessed = [];

// variable tracking number of player guesses remaining
var guessesLeft = 9;

// variable tracking player wins
var playerWins = 0;

// variable tracking player losses
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

// selects character at random from alphabet variable
var compChoice = alphabet.charAt(Math.random() * 26);
console.log("Computer's selection: " + compChoice);

// player can guess any letter of the alphabet by pressing the corresponding key
document.onkeyup = function(selection) {
  // key press adds letter to variable
  var userGuess = selection.key.toLowerCase();
  console.log("Player guess: " + userGuess);

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
    console.log("Letters guessed: " + lettersGuessed);
  }

  // decreases guessesLeft variable by 1 after each valid (incorrect) user guess
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
    console.log("Player losses: " + playerLosses);
  }

  // player win condition
  function playerWin() {
    alert("You win!");
    playerWins += 1;
    lettersGuessed = [];
    guessesLeft = 9;
    console.log("Player wins: " + playerWins);
  }

  if (alphabet.search(userGuess) === -1) {
    notLetter();
    guessCounter();
  } else if (lettersGuessed.indexOf(userGuess) !== -1) {
    doubleGuess();
    guessCounter();
  } else if (userGuess == compChoice) {
    playerWin();
  } else if (guessesLeft == 1) {
    playerLoss();
  } else {
    letterTrack();
    guessCounter();
  }
};
