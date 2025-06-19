

function getComputerChoice() {
    // Randomly return one of the string values
    // rock, paper, scissor 
    let computerChoice; 
    let randomNumber = Math.random();
    if (randomNumber > 0.3) {
        return computerChoice = "rock";
    } else if (randomNumber > 0.6) {
        return computerChoice = "rock";
    } else {
        return computerChoice = "scissor";
    }
}

function getHumanChoice() {
    // let userChoice = prompt("User: please input rock, paper or scissor: ");
    const userChoice = document.querySelector("#userChoice");
    userChoice.addEventListener("click", playRound);
    return userChoice.toLowerCase();
}

function playRound(userMove, computerMove, humanScore, computerScore) { 
    // Check valid input
    while (checkInput(userMove)=== false) {
        userMove = getHumanChoice(); // update the userMove variable 
    }
    
    // Print information at the beginning of the round
    console.log("Round start! User score: ", humanScore);
    console.log("Round start! Computer score: ", computerScore);
    console.log("User: ", userMove);
    console.log("Computer: ", computerMove);
    // Simplest case first 
    if (userMove === computerMove) {
        // alert(`It's a tie! User played ${userMove} and computer played ${computerMove}`);
        console.log(`It's a tie! User played ${userMove} and computer played ${computerMove}`);
        return 
    } else if (
        (userMove === "rock" && computerMove === "paper") 
        || (userMove === "paper" && computerMove === "scissor") 
        || (userMove === "scissor" && computerMove === "rock") )  {
        // alert(`Computer wins this round! User played ${userMove} and computer played ${computerMove}`);   
        console.log(`Computer wins this round! User played ${userMove} and computer played ${computerMove}`) 
        winner = "computer"
        return winner;
    } else if ((userMove === "rock" && computerMove === "paper") 
        || (userMove === "paper" && computerMove === "scissor") 
        || (userMove === "scissor" && computerMove === "rock")) {
        // alert(`User wins this round! User played ${userMove} and computer played ${computerMove}`);
        console.log(`User wins this round! User played ${userMove} and computer played ${computerMove}`) 
        winner = "human"
        return winner;
    }
}

function checkInput(choice) {
    return (choice === "rock" || choice === "paper" || choice ==="scissor") ? true : false; 
}

function playGame(number) {
    
    // Initiate score for the game 
    let humanScore = 0;
    let computerScore = 0;
    // Game start
    for (let round = 1; round <= number; round++) { 
        // Ask for new choices at start of each round
        console.log(`\nRound: ${round}`)
        const userMove = getHumanChoice();
        const computerMove = getComputerChoice();
        // Play round and find the winner 
        let winner = playRound(userMove, computerMove, humanScore, computerScore);
        // Add score for the winner of the round 
        if (winner === "computer") {
            computerScore += 1;
        } else if (winner === "human") {
            humanScore += 1;
        } 
        console.log(`Human: ${humanScore} - Computer: ${computerScore}`);
    }  
    return console.log(`\nFINAL SCORE! Human: ${humanScore} - Computer: ${computerScore}`);
}

// CALL THE FUNCTIONS
playGame(5);
