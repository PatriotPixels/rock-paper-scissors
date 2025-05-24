//Rock paper scissors Game

function getComputerChoice() {
    let num = Math.random() * 3 
    let num1 = Math.floor(num)
    if (num1 === 0) {
        return 'rock'
    }
    else if (num1 === 1) {
        return 'paper'
    }
    else {
        return 'scissors'
    }
}

function getHumanChoice() {
    prompt('Enter your choice')
   
}


let humanScore;
let computerScore;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase
    computerChoice = getComputerChoice

    if (humanChoice === computerChoice) {
        print('Its a tie!')

    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        print(winMessage)
        humanScore++
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        print(winMessage)
        humanScore++
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        print(winMessage)
        humanScore++
    } else {
        print(looseMessage)
        computerScore++
    }
    const winMessage = 'You Win!';
    const looseMessage = 'You loose!'
}

function playGame() {
    playRound++
    if (playRound === 5) {
        if (humanScore > computerScore) {
            print('You win best out of 5!')
        } else {
            print('You lost best out of 5!')
        }
    }
}

