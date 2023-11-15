 
function getComputerChoice () {

    let computerChoice = (Math.floor(Math.random() * 3 +1))

    if (computerChoice == 1) {
        console.log ('rock')
        return 'rock'
    } else if (computerChoice == 2) {
        console.log ('paper')
        return 'paper'
    } else {(computerChoice == 3) 
        console.log ('scissors')
        return 'scissors'
    }
};

function getPlayerChoice () {

    let playerChoice = prompt('Choose your destiny... wisely.').toLowerCase();

    if (playerChoice == 'rock') {
        return 'rock'
    } else if (playerChoice == 'paper') {
        return 'paper'
    }else if (playerChoice == 'scissors'){
        return 'scissors'
    } else {(playerChoice == '')
        alert("Quit playin', bruh.")
    }
}

function playRound (playerSelection, computerSelection) {
    
    if ((playerSelection == 'rock' && computerSelection == 'scissors')
    || (playerSelection == 'paper' && computerSelection == 'rock')
    || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        return 'You win this round!'
    } else if ((playerSelection == 'rock' && computerSelection == 'paper')
    || (playerSelection == 'paper' && computerSelection == 'scissors')
    || (playerSelection == 'scissors' && computerSelection == 'rock')) {
        return 'You lost this round :('
    } else if ((playerSelection == 'rock' && computerSelection == 'rock') 
    || (playerSelection == 'paper' && computerSelection == 'paper')
    || (playerSelection == 'scissors' && computerSelection == 'scissors')) {
        return "It's a draw."
    }
}
// create a new function that uses the stored values below to play the game
function game () {

    console.log (singleGame);
    getComputerChoice();
    getPlayerChoice();
    console.log (playRound(playerSelection, computerSelection));
    
}

let drawCounter = 0
let playerScore = 0
let computerScore = 0
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
const singleGame = playRound(playerSelection, computerSelection);

console.log(game());