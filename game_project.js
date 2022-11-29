
let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

function computerPlay(num) {

    let result = Math.floor(Math.random() * num);
    if (result==0) {
        return "Rock";
    } else if (result==1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
//computerPlay(3) expected output will be 0, 1, or 2
computerPlay(3);

//1 round of Rock, Paper, Scissors!
function playRound(playerSelection, computerSelection) {
    const playerSelection_small = playerSelection.toLowerCase();
    //when user selects rock
    if (computerSelection==0 && playerSelection_small == "rock") {
        return "Rock ties with Rock";
    } else if (computerSelection==1 && playerSelection_small == "rock") {
        return "Rock loses to Paper";
    } else if (computerSelection==2 && playerSelection_small == "rock") {
        return "Rock beats Scissors";  
    }
    
    //when user selects Paper
    if (computerSelection==0 && playerSelection_small == "paper") {
        return "paper beats Rock";
    } else if (computerSelection==1 && playerSelection_small == "paper") {
        return "Rock ties with Paper";
    } else if (computerSelection==2 && playerSelection_small == "paper") {
        return "paper loses to Scissors";  
    }

    //when user selects scissors
    if (computerSelection==0 && playerSelection_small == "scissors") {
        return "Scissors loses to Rock";
    } else if (computerSelection==1 && playerSelection_small == "rock") {
        return "Scissors beats Paper";
    } else if (computerSelection==2 && playerSelection_small == "rock") {
        return "Scissors ties with Scissors";  
    }
}

const playerSelection = "ROCK";
let computerSelection = computerPlay(3);
console.log(playRound(playerSelection, computerSelection));
console.log(playRound(playerSelection, computerSelection));
console.log(playRound(playerSelection, computerSelection));