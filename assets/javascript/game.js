//Make a variable name of "computerChoices" and a value of arrays with all 26 letters in the alphabet.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Make a variable for each score subjects.
var wins = 0;
var lose = 0;
var attempts = 9;
var guessMade = [];
var lettersPressed = lettersPressed;
//Make a function for when a user press a key, that specific key is pressed.
document.onkeyup = function (event) {
    //Make a variable computerGuess and a function that randomizes the alphabet letters.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    //Make a variable for the user when a key is pressed via document.onkeyup.
    var userGuess = event.key;
    //Make if statements for a user and computer that shows which key is pressed on either sides.
    if ((userGuess === computerChoices.length && computerGuess === computerChoices.length)) {
    }
    //Make if statements where a user's keys is equal to the computers keys.
    if ((userGuess === computerGuess && computerGuess === userGuess)) {
        wins++; //User wins and gets a point which will increment by 1. 
        attempts--; //attempts number will decrease whenever a key is guessed/pressed.
        guessMade = []; //letters guessed.
    }
    //Make an else if statement where if the user's keys is not equal to the computer's keys and also attempts count decrease.
    else if (userGuess !== computerGuess) {
        attempts--;
    }
    //Make a statement for when attempts reaches "0", user loses and score resets.
    
    if (attempts == 0) {
        attempts = 9; //This resets back to 9 when the attempt reaches 0.
        lose++; //User lose and the score of loss will increment by 1.
        guessMade = []; //Letters guessed.
    }
    //Also a statement for leters that are guessed to be shown and disappear when user=computer.
    if (guessMade.indexOf(userGuess) >= 0) {       
    }

    else { //This shows and pushes the letter keys pressed onto the screen which makes it visible to the user.
        guessMade.push(userGuess);
        document.getElementById("letterGuess").innerHTML = guessMade;
    }
    //Put all IDs and Text-Contents here
    var yourGuesses = document.getElementById("your-guesses");
    var computerPressed = document.getElementById("computer-pressed");
    var youWin = document.getElementById("you-win");
    var youLose = document.getElementById("you-lose");
    var guessesleft = document.getElementById("guesses-left");

    yourGuesses.textContent = "Current Letter Pressed: " + userGuess;
    computerPressed.textContent = "Current Letter Pressed: " + computerGuess;
    youWin.textContent = "Your Score: " + wins;
    youLose.textContent = "Losses: " + lose;
    guessesleft.textContent = "Your Attempts: " + attempts;
};
