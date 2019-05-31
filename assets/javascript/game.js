

    var round = 1;
    var wins = 0;


    function rounds() {
        if (round === 1) {
            console.log("inside round # 1");
            readyToRumble("gandalf");
        }
        else if (round === 2) {
            console.log("inside round # 2");
            readyToRumble("miley cyrus");
        }
        else if (round === 3) {
            readyToRumble("lady gaga");
        }
        else {
            readyToRumble("tom cruise");
            document.getElementById("gameOver").innerHTML = "Time's up brotha, you won " + wins + "times.";
        }
    }

    rounds();
    
    function readyToRumble(wordToGuess) {
        console.log("inside readyToRumble()");

        document.onkeyup = function() {
            // ------ PROMPT GUESS
            document.getElementById("guessPrompt").innerHTML = "Guess the word below:";

            // ------ SET UNDERSCORES
            var underscores = "_ ";
            for (var j = 1; j < wordToGuess.length; j++) {
                underscores += "_ ";
                // document.getElementById("underscoresID").innerHTML = "sdf";
            }
            console.log("these are the underscores: " + underscores);
            document.getElementById("underscoresID").innerHTML = underscores;

            var newUnderscores = [''];
            // ------ ON KEY UP - CAPTURE LETTER & COMPARE
            for (var i = 0; i < 10; i++) {
                document.onkeyup = function () {
                    console.log("inside 'onkeyup function' - word: " + wordToGuess);
                    var letterPressed = event.key;
                    console.log("letter pressed: " + letterPressed)


                    // ------ GUESS
                    for (var i = 0; i < wordToGuess.length; i++) {
                        console.log("----> inside for loop - word: " + wordToGuess);
                        if (letterPressed.toString() === wordToGuess.charAt(i)) {
                            console.log("well done my brotha, you made it!")
                            // ------ SET NEW UNDERSCORES 
                            if (newUnderscores[i] === wordToGuess.charAt(i)) {
                                console.log("already guessed");
                            }
                            else {
                                newUnderscores.push(letterPressed.toString());
                                console.log("new underscore: " + newUnderscores);
                            }
                        }
                        else {
                            newUnderscores.push('_ ');
                            console.log("new underscore: " + newUnderscores);
                        }
                    }
                    console.log(newUnderscores);
                    // document.getElementById("underscoresID").innerHTML = newUnderscores;
                }

            }
        }


    }





