let box = document.querySelector('#box');
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let results = document.querySelector('#results');
let pcChoice = document.querySelector('#pcChoice');
let userChoice = document.querySelector('#userChoice');
let score = document.querySelector('#score');

let playerSelection = ''
let playerScore = 0
let computerScore = 0
let drawCounter = 0

function getComputerChoice () {
    let computerChoice = (Math.floor(Math.random() * 3 +1))

    if (computerChoice == 1) {
        console.log ('Computer chose rock')
        return 'rock'
    } else if (computerChoice == 2) {
        console.log ('Computer chose paper')
        return 'paper'
    } else { 
        console.log ('Computer chose scissors')
        return 'scissors'
    }
};

const getPlayerChoice = box.addEventListener('click', (e) => {
        let target = e.target;
        playerSelection = target.id
        console.log(`You chose ${playerSelection}`)
    });

function playRound (playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'scissors')
    || (playerSelection === 'paper' && computerSelection === 'rock')
    || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        console.log ('You win this round!')
        playerScore++
        console.log (`Player score: ${playerScore}`)
    } else if ((playerSelection === 'rock' && computerSelection === 'paper')
    || (playerSelection === 'paper' && computerSelection === 'scissors')
    || (playerSelection === 'scissors' && computerSelection === 'rock')) {
        console.log ('You lost this round :(')
        computerScore++
        console.log (`Computer score: ${computerScore}`)
    } else {
        console.log ("It's a draw.")
        drawCounter++
        console.log (`Draw counter: ${drawCounter}`)
    }
}
function game () {
    const computerSelection = getComputerChoice();
    playRound (playerSelection, computerSelection)
}

function reset () {
    if (computerScore === 5 || playerScore === 5 || drawCounter === 5) {
        rock.disabled = true;
        paper.disabled = true
        scissors.disabled = true
        let btn = document.createElement('button');
        btn.textContent = 'Reset';
        box.appendChild(btn);
        btn.addEventListener('click', () => {
            location.reload()
        })
    }
}

function winner () {
    if (computerScore === 5) {
        results.textContent = 'The computer won the game'
    } else if (playerScore === 5) {
        results.textContent = 'You won the game'
    } else if (drawCounter === 5) {
        results.textContent = "It's a draw"
    }
    reset();
}

box.addEventListener('click', () => {
    game();
    let computerSelection = getComputerChoice()
    pcChoice.textContent = `Computer chose ${computerSelection}`
    userChoice.textContent = `You chose ${playerSelection}`
    score.textContent = `Player score: ${playerScore} | Computer score: ${computerScore} | Draw counter: ${drawCounter}`
    winner();
});