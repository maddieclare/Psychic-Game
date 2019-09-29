// var with letters of the alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz";

// array keeping track of letters that player has guessed
var lettersGuessed = [];

// var with number of guesses allowed
var guessesLeft = 12;

// var counting player wins
var playerWins = 0;

// var counting player losses
var playerLosses = 0;

// computer selects letter at random and stores in a var
var compChoice = alphabet.charAt(Math.random() * 26);
console.log(compChoice);

// function allowing player to guess any letter of the alphabet by pressing the corresponding key
document.onkeyup = function(selection) {
  // key press adds letter to var
  var userGuess = selection.key.toLowerCase();
  console.log(userGuess);

  // function preventing any non-alphabetical key from being counted as a guess
  if (alphabet.search(userGuess) == -1) {
    alert("Please guess a valid letter of the alphabet.");
    return;
  // can't guess the same letter twice
  } else if (lettersGuessed.indexOf(userGuess) !== -1) {
    alert("You've already guessed that letter!");
    return;
  } else {
    lettersGuessed.push(userGuess);
    console.log(lettersGuessed);
  }
};


// after each valid user guess, lettersGuessed var decreases by 1

// if lettersGuessed var reaches 0, player loses
