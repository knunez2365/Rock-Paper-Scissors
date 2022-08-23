const weapons = ["p", "r", "s"];

let computerScore = 0;
let playerScore = 0;


function checkWinner(playerGuess = null, computerSelection = null){
    if(computerSelection === playerGuess){
        result = `You Tie! you played ${playerGuess}! The computer played ${computerSelection}`;
        win = "its a tie"

    }else if((computerSelection === "p") && (playerGuess === "r")){
        result = `human looses you played rock! The computer played paper`;
        win = "computerWin";
    }else if((computerSelection === "r") && (playerGuess === "p")){
        result = `Human wins you played paper! The computer played rock`;
        win = "playerWin";
    }else if((computerSelection === 's') && (playerGuess === 'p')){
        result = `computer wins you played paper! The computer played scissors`;
        win = "computerWin";
    }else if((computerSelection === 'p') && (playerGuess === 's')){
        result = `Human wins you played scissors! The computer played paper`;
        win = "playerWin";
    }else if((playerGuess === 'r') && (computerSelection === 's')){
        result = `Human wins you played rock! The computer played scissors`;
        win = "playerWin";
    }else if((playerGuess === 's') && (computerSelection === 'r')){
        result = `Human Looses you played scissors! The computer played rock`;
        win = "computerWin";
    }else{
        result = `you need a weapon of choice either: paper, rock, scissors`;
        win = "fix"
    }
    return(win);
};


function game(roundResult) {
    if (roundResult === 'playerWin') {
        playerScore++;
    } else if (roundResult === 'computerWin') {
        computerScore++;
    } else{
        "its a tie!"
    }
};

for (let i = 1; playerScore <= 4; i++) {
    let playerGuess = prompt(('what is your weapon of choice: Rock, Paper, Scissors?')).slice(0,1).toLowerCase();
    let computerSelection = weapons[Math.floor(Math.random()*weapons.length)];
    console.log(checkWinner(playerGuess, computerSelection));
    console.log(game(win));
    console.log(`current score ${playerScore} and ${computerScore}`)
};



