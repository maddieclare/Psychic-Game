// var with letters of the alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz";

// array keeping track of letters that player has guessed
var lettersGuessed = [];

// computer selects letter at random and stores in a var
var compChoice = alphabet.charAt(Math.random() * 26);
console.log(compChoice);

// function allowing player to guess any letter of the alphabet by pressing the corresponding key
document.onkeyup = function(selection) {
  var userGuess = selection.key.toLowerCase();
  console.log(userGuess);

  // function preventing any non-alphabetical key from being counted as a guess
  if (alphabet.search(userGuess) == -1) {
    alert("Please guess a valid letter of the alphabet.");
    return;
  } else if (lettersGuessed.indexOf(userGuess) !== -1) {
    alert("You've already guessed that letter!");
    return;
  } else {
      lettersGuessed.push(userGuess);
      console.log(lettersGuessed);
  }
};

// key press adds letter to var
// can't guess the same letter twice

// var with number of guesses allowed
// after each valid user guess this var decreases by 1

// var counting player wins

// var counting player losses
