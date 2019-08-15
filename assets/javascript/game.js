// ---- GLOBAL VARIABLES:
var round = 0;
var wins = 0;
var losses = 0;
var wordToGuess = "";
var underscoreIndex = 0;
// reset values:
var underscores = "";
var letterPressed = "";
var wronglyGuessedLetters = "";
var attemptsLeft = 5;
var numWrongGuesses = 0;
var guessedRight = false;
var guessedSameLetter = false;
var guessedSameWrongLetter = false;


roundCount();
updateRecords();
readyToRumble();
setUnderscores();
guessLetter();



// --------------------- ROUND COUNT:
function roundCount() {
    round += 1;
    resetValues();

    if(round === 1) {
        wordToGuess = "gandalf";
    }
    else if(round === 2) {
        wordToGuess = "miley cyrus";
    }
    else if(round === 3) {
        wordToGuess = "lady gaga";
    }
    else if(round === 4) {
        wordToGuess = "tom cruise";
    }
    else {
        endThisJazz();
    }
}


// --------------------- RESET VALUES:
function resetValues() {
    underscores = "";
    letterPressed = "";
    wronglyGuessedLetters = "";
    attemptsLeft = 5;
    numWrongGuesses = 0;
    guessedRight = false;
    guessedSameLetter = false;
    guessedSameWrongLetter = false;
}


// --------------------- UPDATE RECORDS:
function updateRecords() {
    document.getElementById("underscoresID").innerHTML = underscores;
    document.getElementById("recentEventID").innerHTML = "letter pressed: " + letterPressed;
    document.getElementById("roundNumberID").innerHTML = "round #: " + round;
    document.getElementById("wonRoundsID").innerHTML = "Won rounds: " + wins;
    document.getElementById("numWrongGuessesID").innerHTML = "AMOUNT OF LETTERS GUESSED WRONG: " + numWrongGuesses;
    document.getElementById("attemptsLeftID").innerHTML = "ATTEMPTS YOU HAVE LEFT: " + attemptsLeft;
    document.getElementById("wrongLettersGuessedID").innerHTML = "WRONGLY GUESSED LETTERS: " + wronglyGuessedLetters;
}


// --------------------- SET UNDERSCORES:
function setUnderscores() {
    for(var i = 0; i < wordToGuess.length; i++) {
        underscores += " _";
    }
    updateRecords();
}


// --------------------- GUESS LETTER:
function guessLetter() {

    // 10 attempts: 
    while(attemptsLeft != 0) {
        attemptsLeft -= 1;

        // --- PRESS KEY
        document.onkeyup = function () {
            letterPressed = event.key.toString();

            updateRecords();
            document.getElementById("guessPromptID").innerHTML = "Guess again!"

            checkGuess();
        }
    }
    losses += 1;
    roundCount();
}


// --------------------- CHECK GUESS:
function checkGuess() {

    // iterate through word
    for(var i = 0; i < wordToGuess.length; i++) {
        underscoreIndex = i + 1;

        // if right guess:
        if(letterPressed === wordToGuess.charAt(i)) {
            console.log("inside if letter p")
            if(letterPressed != underscores.charAt(underscoreIndex)) {
                guessedRight = true;
            }
            else {
                guessedSameLetter = true;
            }
        }
        // if guessed wrong same letter:
        else if(wronglyGuessedLetters.includes(letterPressed)) {
            guessedSameWrongLetter = true;
        }
    }

    // guess right - not subtract count:
    if(guessedRight == true) {
        underscores = modifyUnderscores(underscores, underscoreIndex, letterPressed);
        document.getElementById("recentEventID").innerHTML = "Well done my brotha, you've got it right!"
    }
    // not subtract count:
    else if(guessedSameLetter == true) {
        document.getElementById("recentEventID").innerHTML = "You've guessed this before, friend."
    }
    // not subtract count:
    else if(guessedSameWrongLetter == true) {
        document.getElementById("recentEventID").innerHTML = "Let's try again brotha, you've guessed this one wrong before."
    }
    // guessed wrong - subtract count:
    else {
        attemptsLeftID -= 1;
        wronglyGuessedLetters += letterPressed;
        document.getElementById("recentEventID").innerHTML = "Wrong guess my brotha.";
    }



}


// --------------------- MODIFY UNDERSCORES:
function modifyUnderscores(str, index, chr) {
    updateRecords();
    if(index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}



// --------------------- READY TO RUMBLE:
function readyToRumble() {

    document.onkeyup = function () {
        // ------ PROMPT GUESS:
        document.getElementById("pressKeyToStartID").innerHTML = "";
        document.getElementById("guessPromptID").innerHTML = "Guess the word below:";
    }
}


// --------------------- END THIS JAZZ:
function endThisJazz() {
    var winnerOrLooser = "";

    if(wins > losses) {
        winnerOrLooser = "WINNER!";
    }
    else if(wins === looses) {
        winnerOrLooser = "BIG TIME DRAW-ER!";
    }
    else {
        winnerOrLooser = "LOOSER!";
    }

    document.getElementById("gameOverID").innerHTML = "Time's up brotha, you won " + wins + "times and lost " + losses + " times! That makes you a " + winnerOrLooser;
    return;
}