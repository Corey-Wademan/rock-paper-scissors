const computerPlay = () => {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return 'rock'
    } else if (random === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
};

const playRound = (playerSelection, computerSelection) => {
    computerSelection = computerPlay();
    let choice = prompt('Please pick Rock, Paper, or Scissors');
    playerSelection = choice.toLowerCase().toString();

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'player wins'
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'player wins'
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'player wins'
    } else {
        return 'computer wins'
    };
};

console.log(playRound());
