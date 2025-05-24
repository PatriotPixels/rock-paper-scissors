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

}

