const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const buttons = document.querySelectorAll('button');
const userResult = document.querySelector('#userResult');
const computerResult = document.querySelector('#computerResult');

const choicesContainer = document.querySelector('.choices-container');
const resultContainer = document.querySelector('.result-container');

const rockValue = rockBtn.dataset.value;
const paperValue = paperBtn.dataset.value;
const scissorsValue = scissorsBtn.dataset.value;

let userScore = 0;
let computerScore = 0;

// Handle User Clicked
function userClicked(userSelection) {
    return playRound(userSelection, computerPlay());
}

// Computer Play
const computerPlay = () => {
    const compRandom = Math.floor(Math.random() * 3) + 1; // Generate random number between 1 to 3
    if (compRandom === 1) {
        return ('rock');
    } else if (compRandom === 2) {
        return ('paper');
    } else if (compRandom === 3) {
        return ('scissors');
    }
}

// Create a New Div for playRound()
function createNewDiv (userClicked, computerPlay, winner) {
    let newDiv = document.createElement('div');
    newDiv.className = 'newDiv';
    resultContainer.appendChild(newDiv);
    trackScore(userScore, computerScore);
    return newDiv.textContent = `${userClicked} vs ${computerPlay} = ${winner}`;
}

// Play Single Round
    function playRound(userClicked, computerPlay) {
        userResult.textContent = userClicked;
        computerResult.textContent = computerPlay;
        if (userClicked === computerPlay) {
            userScore++;
            computerScore++;
            return createNewDiv (userClicked, computerPlay, `It's a tie`);
        } else if ((userClicked === 'rock' && computerPlay === 'scissors') || 
                    (userClicked === 'paper' && computerPlay === 'rock') || 
                    (userClicked === 'scissors' && computerPlay === 'paper')) {
                        userScore++;
                        return createNewDiv (userClicked, computerPlay, `You won`);
        } else if ((userClicked === 'rock' && computerPlay === 'paper') ||
                    (userClicked === 'paper' && computerPlay === 'scissors') ||
                    (userClicked === 'scissors' && computerPlay === 'rock')) {
                        computerScore++;
                        return createNewDiv (userClicked, computerPlay, `You lost`);
        }
    }

// Create a New Div for trackScore()
function makeNewDiv (result) {
    let scoreTracker = document.createElement('div');
    scoreTracker.className = 'score-tracker';
    choicesContainer.appendChild(scoreTracker);
    return scoreTracker.textContent = `${result}`;
}

// Start EventListener Fn
function eventListener () {
    return buttons.forEach(button => { button.addEventListener('click', () => userClicked((button.dataset.value)))
    });
}

eventListener();

// removeEventListener Fn
function removeEventListener () {
    buttons.forEach(button => button.setAttribute('disabled', ''));
    let resetButton = document.createElement('button');
    resetButton.textContent = 'Play Again?';
    resetButton.classList = 'replay-btn';
    resultContainer.appendChild(resetButton);
    return playAgainListener();
}

// Listen to playAgain? Fn 
function playAgainListener () {
    const replayBtn = document.querySelector('.replay-btn');
    return replayBtn.addEventListener('click', () => window.location.reload());
}

//Display running score
function trackScore (userScore, computerScore) {
    console.log(userScore, computerScore);
    if (userScore === 5 && computerScore === 5) {
        makeNewDiv(`It's a tie`);
        return removeEventListener ();
    } else if (userScore === 5 && computerScore < 5) {
        makeNewDiv(`You won`);
        return removeEventListener ();
    } else if (userScore < 5 && computerScore === 5) {
        makeNewDiv(`You lost`);
        return removeEventListener ();
    };
}








