
let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

function computerPlay() {

    let result = Math.floor(Math.random() * 3);
    if (result==0) {
        return "Rock";
    } else if (result==1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

let playerChoice = 0;
let computerChoice = 0;

//1 round of Rock, Paper, Scissors!
function playRound(playerSelection, computerSelection) {
    let playerSelection_small = playerSelection.toLowerCase();
    if (computerSelection==0 && playerSelection_small == "rock" || computerSelection==1 && playerSelection_small == "paper" || computerSelection==2 && playerSelection_small == "scissors") {
        return "You tied with Computer";
    } else if (computerSelection==1 && playerSelection_small == "rock" || computerSelection==2 && playerSelection_small == "paper" || computerSelection==0 && playerSelection_small == "scissors") {
        computerChoice = computerChoice + 1;
        return "You lose to the Computer";
    } else if (computerSelection==2 && playerSelection_small == "rock" || computerSelection==0 && playerSelection_small == "paper" || computerSelection==1 && playerSelection_small == "scissors") {
        playerChoice = playerChoice + 1; 
        return "You beat the Computer";  
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))

function finalFiveGameResult() {
    if (playerChoice > computerChoice) {
        console.log("You Win best out of 5 games!");
    } else if (playerChoice < computerChoice) {
        console.log("You Lose best out of 5 games");
    } else {
        console.log("you and the computer are at tie after 5 games");
    }
}

//Playing best out of 5 games
function game() {
    for(let i=0; i<5; i++) {
        console.log("Lets play a game of Rock Paper Scissors!");
        prompt("Select Rock, Paper, or Scissors")
        playRound(playerSelection, computerSelection());
    }  
    finalFiveGameResult();
} 