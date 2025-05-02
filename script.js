let computersChoice, humanChoice, humanScore = 0, ComputerScore = 0;
const buttons = document.querySelectorAll("button");
const alertConainer = document.getElementById("round-result");
const humanScoreContainer = document.getElementById("human-score");
const computerScoreContainer = document.getElementById("Computer-score");
const historyContainer = document.getElementById("result-stack")
let roundResult , status;

function getComputersChoice() {
    let number = Math.random() * 100;
    computersChoice = (number <= 33) ? "scissors" : (number <= 66) ? "rock" : "paper";
}

function getHumanChoice(button) {
    humanChoice = button.getAttribute("data-value");
}

function playRound(button) {
    getComputersChoice();
    getHumanChoice(button);
    if (
        (computersChoice === "rock" && humanChoice === "paper")
        ||
        (computersChoice === "paper" && humanChoice === "scissors")
        ||
        (computersChoice === "scissors" && humanChoice === "rock")
    ) {
        humanScore++;
        roundResult = "You Won! " + humanChoice + " beats the " + computersChoice;
        status = "won"
    }
    else if (computersChoice === humanChoice) {
        roundResult = "Draw! No Score Given!!";
        status = "draw"
    } else {
        ComputerScore++;
        roundResult = "Computer Won! " + computersChoice + " beats the " + humanChoice;
        status = "lose"
    }
}

function updateDOM() {
    alertConainer.textContent = roundResult;
    humanScoreContainer.textContent = humanScore;
    computerScoreContainer.textContent = ComputerScore;

    const tableRow = document.createElement("tr");
    const tableCell1 = document.createElement("td");
    const tableCell2 = document.createElement("td");
    const tableCell3 = document.createElement("td");

    tableCell1.textContent = humanChoice;
    tableRow.appendChild(tableCell1);

    tableCell2.textContent = computersChoice;
    tableRow.appendChild(tableCell2);

    tableCell3.textContent = status;
    tableCell3.setAttribute("data-status" , status);
    tableRow.appendChild(tableCell3);

    historyContainer.appendChild(tableRow);
}

(() => {
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            
            if(humanScore>= 5 || ComputerScore >= 5){
                return
            }


            playRound(btn)

            if (humanScore == 5) {
                roundResult = `You Won! by  ${humanScore - ComputerScore} rounds`;
            }
            else if (ComputerScore == 5) {
                roundResult = `You Lose! by  ${ComputerScore - humanScore} rounds`;
            }

            updateDOM();

        });
    })
})()