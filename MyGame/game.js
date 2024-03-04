let secretNumber;
let guessCount = 0;

document.getElementById('start-button').addEventListener('click', function () {
    document.getElementById('start-menu').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    startGame();
});

document.getElementById('submit-button').addEventListener('click', function () {
    let guess = parseInt(document.getElementById('guess-input').value);

    if (!isNaN(guess) && guess >= 1 && guess <= 100) {
        guessCount++;
        if (guess === secretNumber) {
            let score = 100 - ((guessCount-1) * 10);
            if (score < 0) {
                score = 0;
            }
            document.getElementById('message').textContent = 'Congratulations! You guessed the correct number in ' + guessCount + ' guesses. Your score is: ' + score;
            document.getElementById('message').classList.add('congratulation');
            document.getElementById('retry-button').style.display = 'block';
        } else if (guess < secretNumber) {
            document.getElementById('message').textContent = 'Try a higher number.';
        } else {
            document.getElementById('message').textContent = 'Try a lower number.';
        }
        document.getElementById('guess-count').textContent = 'Guess Count: ' + guessCount;
    } else {
        document.getElementById('message').textContent = 'Please enter a valid number between 1 and 100.';
    }
});

document.getElementById('retry-button').addEventListener('click', function () {
    startGame();
});

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('guess-input').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('message').classList.remove('congratulation');
    document.getElementById('retry-button').style.display = 'none';
    guessCount = 0;
    document.getElementById('guess-count').textContent = 'Guess Count: ' + guessCount;
}


document.getElementById('game-container').style.display = 'none';
