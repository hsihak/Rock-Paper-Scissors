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





