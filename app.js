const choices = ["rock", "paper", "scissors"];

function game (){
    playRound(){

    }
}

function playRound(computerSelection){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}


function playerChoice(){
    let input = prompt("Type")
}

function computerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}