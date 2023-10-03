const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * 3)];
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
    return "Tie";
    }
    else if((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock"))
    {
        return "Player Wins";
    }
    else{
        return "Computer Wins";
    }

}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result =="Tie"){
        return "Draw"
    }
    else if(result == "player"){
        return `You win ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoice(){

    let pInput = false;
    while (pInput == false){
        const choice = prompt("rock paper scissors");
        if(choice == null){
            continue;
        }
        const choiceLower = choice.toLowerCase();
        if(options.includes(choiceLower)){
            pInput = true;
            return choiceLower;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 0; i < 5; i++){
        //const playerSelection = "rock";
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection, computerSelection) == "player"){
            scorePlayer++;
        }
        else if(checkWinner(playerSelection, computerSelection) == "computer"){
        scoreComputer++;
    }
}
//console.log("Game over")
if(scorePlayer > scoreComputer){
    console.log("player wins!");
}
else if(scorePlayer < scoreComputer){
    console.log("computer wins!");
}
else{
    console.log("it's a tie");
    }   
}
game()

//let score = 0;
//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));
