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

let box = document.querySelector('#box');

const getPlayerChoice = box.addEventListener('click', (e) => {
        let target = e.target;

        switch(target.id) {
            case 'rock':
                console.log(`You chose ${target.id.toLowerCase()}`)
                return target.id;
            case 'paper':
                console.log(`You chose ${target.id.toLowerCase()}`)
                return target.id;
            case 'scissors':
                console.log(`You chose ${target.id.toLowerCase()}`)
                return target.id;
        }
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

    const playerSelection = getPlayerChoice;
    const computerSelection = getComputerChoice();
    const score = playRound (playerSelection, computerSelection)

}

box.addEventListener('click', () => {
    game();
});

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

//  game();
// game();
// game();
// game();
// game();
// winner();


// function getPlayerChoice () {
// let playerChoice = prompt('Choose your destiny... wisely.').toLowerCase();

//     if (playerChoice == 'rock') {
//         return 'rock'
//     } else if (playerChoice == 'paper') {
//         return 'paper'
//     } else if (playerChoice == 'scissors'){
//         return 'scissors'
//     } else {
//         alert("Quit playin', bruh.")
//         return getPlayerChoice()
//     }
// }

// function getPlayerChoice() {
    
// }