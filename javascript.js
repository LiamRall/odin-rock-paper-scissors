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

function getHumanChoice() {
    var humanChoice = prompt("Please enter your choice: ");
    humanChoice = humanChoice.toLowerCase();
    switch (humanChoice) {
        case 'rock':
        case 'paper':
        case 'scissors':
            return humanChoice;
        default:
            alert("Invalid choice. Please try again.");
            return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice){
    switch (humanChoice) {
        case 'rock':
            if (computerChoice === 'rock') {
                console.log('It\'s a tie! Rock vs rock.');
                return;
            } else if (computerChoice === 'paper') {
                computerScore += 1;
                console.log('You lose! Paper beats rock.');
                return;
            } else {
                humanScore += 1;
                console.log('You win! Rock beats scissors.');
                return;
            }
        case 'paper':
            if (computerChoice === 'rock') {
                humanScore += 1;
                console.log('You win! Paper beats rock.');
                return;
            } else if (computerChoice === 'paper') {
                console.log('It\'s a tie! Paper vs paper.');
                return;
            } else {
                computerScore += 1;
                console.log('You lose! Scissors beats paper.');
                return;
            }
        case 'scissors':
            if (computerChoice === 'rock') {
                computerScore += 1;
                console.log('You lose! Rock beats scissors.');
                return;
            } else if (computerChoice === 'paper') {
                humanScore += 1;
                console.log('You win! Scissors beats paper.');
                return;
            } else {
                console.log('It\'s a tie! Scissors vs scissors.');
                return;
            }
    }
}

function playGame(){
    for (var i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log('You win the game!');
    } else if (humanScore < computerScore) {
        console.log('You lose the game!');
    } else {
        console.log('It\'s a tie!');
    }
}

var humanScore = 0;
var computerScore = 0;

playGame()




