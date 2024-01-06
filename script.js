function getComputerChoice () {

    let computerChoice = (Math.floor(Math.random() * 3 +1))

    if (computerChoice == 1) {
        console.log ('rock')
        return 'rock'
    } else if (computerChoice == 2) {
        console.log ('paper')
        return 'paper'
    } else { 
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
    } else if (playerChoice == 'scissors'){
        return 'scissors'
    } else {
        alert("Quit playin', bruh.")
        return getPlayerChoice()
    }
}

function playRound (playerSelection, computerSelection) {
    
    if ((playerSelection == 'rock' && computerSelection == 'scissors')
    || (playerSelection == 'paper' && computerSelection == 'rock')
    || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        console.log ('You win this round!')
        playerScore++
        console.log (`Player score: ${playerScore}`)
    } else if ((playerSelection == 'rock' && computerSelection == 'paper')
    || (playerSelection == 'paper' && computerSelection == 'scissors')
    || (playerSelection == 'scissors' && computerSelection == 'rock')) {
        console.log ('You lost this round :(')
        computerScore++
        console.log (`Computer score: ${computerScore}`)
    } else {
        console.log ("It's a draw.")
        drawCounter++
        console.log (`Draw counter: ${drawCounter}`)
    }
}
//show most recently updated score
function game () {

    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const score = playRound (playerSelection, computerSelection)

}
// create function with > and < to say who wins

function winner () {
    if (playerScore > computerScore) {
        console.log ('Great job! You won')
    } else if (computerScore > playerScore) {
        console.log ('Unlucky! The computer won')
    } else {
        console.log ("It's a tie.")
    }
}
    let playerScore = 0
    let computerScore = 0
    let drawCounter = 0

game();
game();
game();
game();
game();
winner();
