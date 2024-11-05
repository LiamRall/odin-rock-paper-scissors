function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(humanChoice, computerChoice) {
    const result = document.querySelector('#round-result');
    const scoreElement = document.querySelector('#score');

    if(humanScore < 5 && computerScore < 5) {
        switch (humanChoice) {
            case 'rock':
                if (computerChoice === 'rock') {
                    result.textContent = 'It\'s a tie! Rock vs rock.';
                    return;
                } else if (computerChoice === 'paper') {
                    computerScore += 1;
                    result.textContent = 'You lose! Paper beats rock.';
                    scoreElement.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
                    return;
                } else {
                    humanScore += 1;
                    result.textContent = 'You win! Rock beats scissors.';
                    scoreElement.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
                    return;
                }
            case 'paper':
                if (computerChoice === 'rock') {
                    humanScore += 1;
                    result.textContent = 'You win! Paper beats rock.';
                    scoreElement.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
                    return;
                } else if (computerChoice === 'paper') {
                    result.textContent = 'It\'s a tie! Paper vs paper.';
                    return;
                } else {
                    computerScore += 1;
                    result.textContent = 'You lose! Scissors beats paper.';
                    scoreElement.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
                    return;
                }
            case 'scissors':
                if (computerChoice === 'rock') {
                    computerScore += 1;
                    result.textContent = 'You lose! Rock beats scissors.';
                    scoreElement.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
                    return;
                } else if (computerChoice === 'paper') {
                    humanScore += 1;
                    result.textContent = 'You win! Scissors beats paper.';
                    scoreElement.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
                    return;
                } else {
                    result.textContent = 'It\'s a tie! Scissors vs scissors.';
                    return;
                }
        }
    }
    else if (humanScore === 5) {
        result.textContent = 'You win the game!';
    }
    else {
        result.textContent = 'You lose the game!';
    }

}

document.addEventListener('DOMContentLoaded', function() {
    const scoreElement = document.querySelector('#score');
    scoreElement.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
});

var humanScore = 0;
var computerScore = 0;







