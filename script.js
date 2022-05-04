const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const buttons = document.querySelectorAll('button');
const userResult = document.querySelector('#userResult');
const computerResult = document.querySelector('#computerResult');
const instruction = document.querySelector('#instruction');

const choicesContainer = document.querySelector('.choices-container');
const outcomeContainer = document.querySelector('.outcome-container');

let userScore = 0; // Set userScore variable to start with value of 0
let computerScore = 0; // Set computerScore variable to start with value of 0

// Handle User Clicked
function userPlay(userSelection) {
    return playRound(userSelection, computerPlay()); // return Invoke playRound Fn and assign arguments with which button was clicked by the user and which choice was randomly generate by the computer
}

// Computer Play
const computerPlay = () => {
    const compRandom = Math.floor(Math.random() * 3) + 1; // Generate random number between 1 to 3
    if (compRandom === 1) { // Condition: check if (compRandom generate 1) is true
        return ('rock'); // return rock
    } else if (compRandom === 2) { // Condition: check if (compRandom generate 2) is true
        return ('paper'); // return paper
    } else if (compRandom === 3) { // Condition: check if (compRandom generate 3) is true
        return ('scissors'); // return scissors
    }
}

// Create a New Div for playRound()
function createNewDiv (userPlay, computerPlay, winner) {
    let newDiv = document.createElement('div'); // Create a div element to store in newDiv variable
    newDiv.className = 'newDiv'; // Assign class name to newDiv to the Div element
    outcomeContainer.appendChild(newDiv); // Append the newDiv element to outcomeContainer
    trackScore(userScore, computerScore); // Invoke trackScore Fn 
    return newDiv.textContent = `${userPlay} vs ${computerPlay} = ${winner}`; // return newDiv to display the winner of each round
}

// Play Single Round
    function playRound(userPlay, computerPlay) {
        if (userPlay === computerPlay) { // Condition: check if (userPlay choice is equal to computerPlay choice)
            userScore++; // increment userScore by 1
            computerScore++; // increment computerScore by 1
            return createNewDiv (userPlay, computerPlay, `It's a tie`); // return, invoke createNewDiv Fn and assign arguments with userPlay, computerPlay, and result of the winner
        } else if ((userPlay === 'rock' && computerPlay === 'scissors') || // Condition: check if (these conditions below) are true
                    (userPlay === 'paper' && computerPlay === 'rock') || 
                    (userPlay === 'scissors' && computerPlay === 'paper')) {
                        userScore++; // increment userScore by 1
                        return createNewDiv (userPlay, computerPlay, `You won`); // return, invoke createNewDiv Fn and assign arguments with userPlay, computerPlay, and result of the winner
        } else if ((userPlay === 'rock' && computerPlay === 'paper') || // Condition: check if (these conditions below) are true
                    (userPlay === 'paper' && computerPlay === 'scissors') ||
                    (userPlay === 'scissors' && computerPlay === 'rock')) {
                        computerScore++; // increment computerScore by 1
                        return createNewDiv (userPlay, computerPlay, `You lost`); // return, invoke createNewDiv Fn and assign arguments with userPlay, computerPlay, and result of the winner
        }
    }

// Create a New Div for trackScore()
function makeNewDiv (result) {
    let scoreTracker = document.createElement('div'); // Create a div to store in scoreTracker variable
    scoreTracker.className = 'score-tracker'; // set the div class to score-tracker
    choicesContainer.appendChild(scoreTracker); // append the scoreTracker variable (div) to the choicesContainer div
    return scoreTracker.textContent = `${result}`; // return the scoreTracker div to display result
}

// Start EventListener Fn
function eventListener () {
    return buttons.forEach(button => { button.addEventListener('click', () => userPlay((button.dataset.value), instruction.remove()))
    }); // iterate array of buttons, listen for each button that is clicked and set an annos fn to invoke userPlay Fn with the button value. Also, remove the instruction after any button was clicked 
}

eventListener(); // Invoke as soon as the page is loaded

// removeEventListener Fn
function removeEventListener () {
    buttons.forEach(button => button.setAttribute('disabled', '')); // disable btns after winning or losing
    let resetButton = document.createElement('button'); // Create a new button
    resetButton.textContent = 'Play Again?'; // Assign text to the button
    resetButton.classList = 'replay-btn'; // Assign class to the button
    outcomeContainer.insertAdjacentElement('beforebegin', resetButton); // Assign the button to appear before any event
    return playAgainListener(); // Invoke playAgainListener Fn to allow user to restart the game
}

// Listen to playAgain? Fn 
function playAgainListener () {
    const replayBtn = document.querySelector('.replay-btn'); // Select the replayBtn 
    return replayBtn.addEventListener('click', () => window.location.reload()); // Listen for click whenever user click the button to reload the page
}

//Display running score
function trackScore (userScore, computerScore) {
    userResult.textContent = userScore; // Display current userScore
    computerResult.textContent = computerScore; // Display current computerScore
    if (userScore === 5 && computerScore === 5) { // Condition : check if (userScore is 5 and computerScore is 5) is true 
        makeNewDiv(`It's a tie!`); // Invoke makeNewDiv Fn and assign argument to annouce it's a tie
        return removeEventListener (); // Invoke removeEventListener Fn
    } else if (userScore === 5 && computerScore < 5) { // Condition: check if (userScore is 5 and computerScore is less than 5) is true
        makeNewDiv(`You won, User beats Computer! 🎉`);// Invoke makeNewDiv Fn and assign argument to annouce that you have won
        return removeEventListener (); // Invoke removeEventListener Fn
    } else if (userScore < 5 && computerScore === 5) { // Condition: check if (userScore is less than 5 and computerScore is 5) is true
        makeNewDiv(`You lost, Computer beats User! 😩`); // Invoke makeNewDiv Fn and assign argument to annouce that you have lost
        return removeEventListener (); // Invoke removeEventListener Fn
    };
}








