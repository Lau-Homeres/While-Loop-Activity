const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let number = Math.floor(Math.random() * 10) + 1;
let guessedCorrectly = false;

// Function to handle user guesses
function askGuess() {
    readline.question('Guess a number between 1 and 10: ', (input) => {
        let guess = parseInt(input);

        while (!guessedCorrectly) {
            if (isNaN(guess) || guess < 1 || guess > 10) {
                console.log("Please enter a valid number between 1 and 10.");
            } else if (guess === number) {
                console.log(`You've guessed it right! The number is ${number}`);
                guessedCorrectly = true;
                readline.close(); // Exit after correct guess
                return;
            } else if (guess < number) {
                console.log("Too low! Try again.");
            } else {
                console.log("Too high! Try again.");
            }

            // If incorrect, ask again inside the loop
            return askGuess(); 
        }
    });
}

// Start the game
askGuess();
