let computersChoice , humanChoice , humanScore = 0 , ComputerScore = 0;

function getComputersChoice(){
    let number = Math.random()*100;
    computersChoice =  (number <= 33) ? "scissors" : (number <= 66) ? "rock" : "paper";
}

function getHumanChoice(){
    humanChoice = prompt("Enter the Choice i.e rock , paper or scissors.").toLowerCase();
}

function playRound(){
    getComputersChoice();
    getHumanChoice();
    if(
        (computersChoice === "rock" && humanChoice === "paper")
        ||
        (computersChoice === "paper" && humanChoice === "scissors")
        ||
        (computersChoice === "scissors" && humanChoice === "rock")
    ) {
        humanScore++;
        alert( "You Won! "+ humanChoice + " beats the " + computersChoice);
    }
    else if(computersChoice === humanChoice){
        alert("Draw! No Score Given!!")
    }else{
        ComputerScore++;
        alert( "Computer Won! "+ computersChoice + " beats the " + humanChoice);
    }
}

(()=>{
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if(humanScore > ComputerScore){
        alert(`You Won! by  ${humanScore-ComputerScore} rounds`);
    }
    else if(humanScore === ComputerScore){
        alert("Draw!")
    }
    else{
        alert(`You Lose! by  ${ComputerScore-humanScore} rounds`)
    }
})()