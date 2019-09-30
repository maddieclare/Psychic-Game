// variable containing all letters of the alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz";

// compChoice var needs declaring outside of function
var compChoice;

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
function compSelect() {
  compChoice = alphabet.charAt(Math.random() * 26);
  console.log("Computer's selection: " + compChoice);
}

compSelect();

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

  if (userGuess == compChoice) {
    playerWin();
    compSelect();
  } else if (alphabet.search(userGuess) === -1) {
    // need to figure out why the above statement doesn't work for full stops
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
