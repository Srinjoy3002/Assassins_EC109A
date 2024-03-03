const randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    
    const guess = parseInt(document.getElementById('guess').value);

    
    if (guess === randomNumber) {
        document.getElementById('message').textContent = 'Congratulations! You guessed the number!';
    } else if (guess < randomNumber) {
        document.getElementById('message').textContent = 'Too low. Try again!';
    } else {
        document.getElementById('message').textContent = 'Too high. Try again!';
    }
}