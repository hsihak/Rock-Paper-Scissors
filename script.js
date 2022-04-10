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







