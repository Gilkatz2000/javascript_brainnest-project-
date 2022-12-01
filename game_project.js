
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
//computerPlay(3) expected output will be 0, 1, or 2
computerPlay();

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
        return "Paper ties with Paper";
    } else if (computerSelection==2 && playerSelection_small == "paper") {
        return "paper loses to Scissors";  
    }

    //when user selects scissors
    if (computerSelection==0 && playerSelection_small == "scissors") {
        return "Scissors loses to Rock";
    } else if (computerSelection==1 && playerSelection_small == "scissors") {
        return "Scissors beats Paper";
    } else if (computerSelection==2 && playerSelection_small == "rocscissorsk") {
        return "Scissors ties with Scissors";  
    }
}
const playerSelection = "rock";
let computerSelection = computerPlay();

//This is 1 game 
function playLoopRound(playerSelection, computerSelection) {
    if (computerSelection==0 && playerSelection_small == "rock") {
        console.log("Tie with computer");
    } else if (computerSelection==1 && playerSelection_small == "rock") {
        console.log("Rock loses to Paper");
        computerChoice = computerChoice++;
    } else if (computerSelection==2 && playerSelection_small == "rock") {
        console.log("Rock beats Scissors");
        playerChoice = playerChoice++;
    }
    
    //when user selects Paper
    if (computerSelection==0 && playerSelection_small == "paper") {
        console.log("paper beats Rock");
        playerChoice = playerChoice++;
    } else if (computerSelection==1 && playerSelection_small == "paper") {
        console.log("Tie with computer");
    } else if (computerSelection==2 && playerSelection_small == "paper") {
        console.log("paper loses to Scissors");  
        computerChoice = computerChoice++;
    }

    //when user selects scissors
    if (computerSelection==0 && playerSelection_small == "scissors") {
        console.log("Scissors loses to Rock");
        computerChoice = computerChoice++;
    } else if (computerSelection==1 && playerSelection_small == "scissors") {
        console.log("Scissors beats Paper");
        playerChoice = playerChoice++;
    } else if (computerSelection==2 && playerSelection_small == "scissors") {
        console.log("Tie with computer");
    }   
}

function finalFiveGameResult() {
    let playerChoice = 0;
    let computerChoice = 0;
    if (playerChoice > computerChoice) {
        console.log("You Win best out of 5 games!");
    } else if (playerChoice < computerChoice) {
        console.log("You Lose best out of 5 games");
    } else {
        console.log("you and the computer are at tie after 5 games");
    }
}

function game() {
    let gamesPlayed = 1;
    for(let i=0; i<5; i++) {
        console.log("Lets play a game of Rock Paper Scissors!");
        prompt("Select Rock, Paper, or Scissors");
        playLoopRound();
        gamesPlayed = gamesPlayed++;
    }  
    finalFiveGameResult();
} 

//Playing best out of 5 games
game();