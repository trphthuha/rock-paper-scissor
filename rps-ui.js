const playerIsWinner = "Player";
const computerIsWinner = "Computer";

function getComputerChoice() {
    // Randomly return one of the string values
    // rock, paper, scissor 
    let computerChoice; 
    let randomNumber = Math.random();
    if (randomNumber > 0.3) {
        return computerChoice = "rock";
    } else if (randomNumber > 0.6) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissor";
    }
}

function playRound(userMove) { 
    let computerMove = getComputerChoice();
    let winner; 
    console.log(`Player plays ${userMove}`)
    console.log(`Computer plays ${computerMove}`)

    // Check user move vs computer move 
    if (userMove === computerMove) {
        result = `It's a tie! You played ${userMove} and computer played ${computerMove}`;
        alert(result);
    } else {
        switch(userMove) {
            case "rock":
                if (computerMove === "paper") {
                    winner = computerIsWinner;
                } else if (computerMove === "scissor") {
                    winner = playerIsWinner;
                }
                break;

            case "paper":
                if (computerMove === "scissor") {
                    winner = computerIsWinner;
                } else if (computerMove === "rock") {
                    winner = playerIsWinner;
                }
                break;

            case "scissor":
                if (computerMove === "rock") {
                    winner = computerIsWinner;
                } else if (computerMove === "paper") {
                    winner = playerIsWinner;
                }
        }
        result = `${winner} wins this round. You played ${userMove} and computer played ${computerMove}`;
        alert(result);
    }

    // Display history
    const gameHistory = document.createElement("li");
    const roundHistory = document.createTextNode(`${result}`);
    gameHistory.appendChild(roundHistory);
    document.getElementById("roundHistory").appendChild(gameHistory);

    return winner;
}

function playGame() {
    // Select all the elements
    let scorePlayer = document.querySelector("#playerScore");
    let scoreComputer = document.querySelector("#computerScore");
    let userChoice = document.querySelector("#userChoice")

    // Initiate score for the game 
    let humanScore = 0;
    let computerScore = 0

    // Game start 
    userChoice.addEventListener("click", (event) => {
        userSelection = event.target.id;

        let roundWinner = playRound(userSelection)
        if (roundWinner === computerIsWinner) {
            computerScore += 1;
        } else if (roundWinner === playerIsWinner) {
            humanScore += 1;
        } 
        scorePlayer.textContent = `Human: ${humanScore}`;
        scoreComputer.textContent = `Computer: ${computerScore}`;
        // Result
        const finalWinner = document.createElement("span");
        document.getElementById("finalResult").appendChild(finalWinner);
        if (humanScore == 5 && humanScore > computerScore) {
            finalWinner.textContent = `Game over! You win!`
        } else if (computerScore == 5 && computerScore > humanScore) {
            finalWinner.textContent = `Game over! Computer wins!`
        }
    });  
}

// CALL THE FUNCTIONS
playGame();




 

