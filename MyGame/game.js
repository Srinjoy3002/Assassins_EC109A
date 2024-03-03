let score = 0; // Initialize score counter

function checkGuess() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number
    const guess = parseInt(document.getElementById('guess').value); // Get user's guess

    if (guess === randomNumber) {
        document.getElementById('message').textContent = 'Congratulations! You guessed the number!';
        score++; // Increment score if guess is correct
        document.getElementById('score').textContent = score; // Update score display
    } else if (guess < randomNumber) {
        document.getElementById('message').textContent = 'Too low. Try again!';
    } else {
        document.getElementById('message').textContent = 'Too high. Try again!';
    }
}
