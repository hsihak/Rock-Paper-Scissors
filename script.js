// Computer Play
function computerPlay() {
    const compRandom = Math.floor(Math.random() * 3) + 1; // Generate random number between 1 to 3
    if (compRandom === 1) {
        return ('rock');
    } else if (compRandom === 2) {
        return ('paper');
    } else if (compRandom === 3) {
        return ('scissors');
    }
}

const computerSelection = computerPlay(); // stored computerPlay() return value to a variable to be use in playRound() parameter

// User Play
function userPlay() {
    const userData = prompt ('Rock, Paper, Scissor. Please enter one of the options:', 'Rock');
    let editedUserData = userData.toLowerCase(); // Convert User's Input to lowercase 
    if ((editedUserData !== 'rock') && 
        (editedUserData !== 'paper') && 
        (editedUserData !== 'scissors')) {
            console.log('Invalid entry. Please enter one of the Options!'); 
    } else {
        return editedUserData;
    }
}

const userSelection = userPlay(); // stored userPlay() return value to a variable to be use in playRound() parameter

// Play a Single Round
function playRound(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        return (`It's a tie. ${userSelection} = ${computerSelection}.`)
    } else if ((userSelection === 'rock' && computerSelection === 'paper') ||  
                (userSelection === 'paper' && computerSelection === 'scissors') ||
                (userSelection === 'scissors' && computerSelection === 'rock') ) {
                    return (`You lose & Computer wins. ${computerSelection} beats ${userSelection}.`);
    } else if ((userSelection === 'rock' && computerSelection === 'scissors' ) ||
                (userSelection === 'paper' && computerSelection === 'rock') || 
                (userSelection === 'scissors' && computerSelection === 'paper')) {
                    return (`You win & Computer loses. ${userSelection} beats ${computerSelection}.`);
    }
}

console.log(playRound(userSelection, computerSelection)); // Invoke playRound()



