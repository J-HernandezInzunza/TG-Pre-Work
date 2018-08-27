const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' ||
        userInput === 'paper' ||
        userInput === 'scissors') {
        //console.log(userInput);
        return userInput;
    } else {
        console.log("You Dun GOOFED!");
    }
};
//getUserChoice('balls');

const getComputerChoice = () => {
    let choice = Math.floor((Math.random() * 2) + 1)

    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else if (choice === 2) {
        return 'scissors';
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "The game was a tie.";
    }

    if (userChoice = 'rock') {
        if (computerChoice === 'paper') {
            return "The computer wins this round!";
        } else if (computerChoice === 'scissors') {
            return "You won this round!";
        }
    }
    if (userChoice = 'paper') {
        if (computerChoice === 'scissors') {
            return "The computer wins this round!";
        } else if (computerChoice === 'rock') {
            return "You won this round!";
        }
    }
    if (userChoice = 'scissors') {
        if (computerChoice === 'rock') {
            return "The computer wins this round!";
        } else if (computerChoice === 'paper') {
            return "You won this round!";
        }
    }
}

const playGame = () => {
    let userChoice = getUserChoice('rock');
    console.log(userChoice);
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    //determine winner
    return determineWinner(userChoice, computerChoice);
};

console.log(playGame());
//console.log(determineWinner( getUserChoice('rock') , getComputerChoice() ) );

/*
console.log (getComputerChoice());
console.log (getComputerChoice());
console.log (getComputerChoice());
*/