const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const userResult = document.querySelector('#userResult');
const computerResult = document.querySelector('#computerResult');

const resultContainer = document.querySelector('.result-container');

const rockValue = rockBtn.dataset.value;
const paperValue = paperBtn.dataset.value;
const scissorsValue = scissorsBtn.dataset.value;

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

// Play Single Round
function playRound(userClicked, computerPlay) {
    userResult.textContent = userClicked;
    computerResult.textContent = computerPlay;
    if (userClicked === computerPlay) {
        let newDiv = document.createElement('div');
        newDiv.className = 'newDiv';
        resultContainer.appendChild(newDiv);
        return newDiv.textContent = `${userClicked} vs ${computerPlay} = it's a tie`;
    } else if ((userClicked === 'rock' && computerPlay === 'scissors') || 
                (userClicked === 'paper' && computerPlay === 'rock') || 
                (userClicked === 'scissors' && computerPlay === 'paper')) {
                    let newDiv = document.createElement('div');
                    newDiv.className = 'newDiv';
                    resultContainer.appendChild(newDiv);
                    return newDiv.textContent = `${userClicked} vs ${computerPlay} = You won`;
    } else if ((userClicked === 'rock' && computerPlay === 'paper') ||
                (userClicked === 'paper' && computerPlay === 'scissors') ||
                (userClicked === 'scissors' && computerPlay === 'rock')) {
                    let newDiv = document.createElement('div');
                    newDiv.className = 'newDiv';
                    resultContainer.appendChild(newDiv);
                    return newDiv.textContent = `${userClicked} vs ${computerPlay} = You lost`;
                }
}

// Handle User Clicked
function userClicked(userSelection) {
    return playRound(userSelection, computerPlay());
}

// Listen for the button 
rockBtn.addEventListener('click', () => userClicked (rockValue));
paperBtn.addEventListener('click', () => userClicked (paperValue));
scissorsBtn.addEventListener('click', () => userClicked (scissorsValue));




