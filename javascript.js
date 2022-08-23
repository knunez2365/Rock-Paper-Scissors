
// const DolphinData = [44, 23, 71]

// //const sum = DolphinData.reduce((partialSum, a) => partialSum + a, 0);
// //console.log(sum); // 6

// const calcAverage = (a, b, c) => (a + b + c) / 3;


// const dolphinAvg = calcAverage(85, 54 , 41);

// const  koalaAvg = calcAverage(23, 34, 27);

//function checkWinner(a, b){
//     if(a >= 2 * b){
//         winner = " Dolphin is the winner with a score of";
//         score = a;
//     } else if (b >= 2 * a){
//         winner = " Koala is the winner with a score of ";
//         score = b;
//     }else{
//         winner = "No one wins!";
//         score = " No score, did not reach the points"
//     }
//     return (winner, score);
// } 

// checkWinner(dolphinAvg, koalaAvg);
// console.log(`${winner}  ${score}`)



//let playerGuess = prompt('What is your weapon of choice: Rock, Paper, Scissors? ')


// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// function convert(guess){
//     if(guess === 'rock'){
//         score = 1;
//     } else if (guess === 'paper'){
//         score = 2;
//     } else if (guess === 'scissors'){
//         score = 3;
//     }
//     return (score);
// }

const weapons = ["p", "r", "s"];

let computerScore = 0;
let playerScore = 0;


function checkWinner(playerGuess = null, computerSelection = null){
    if(computerSelection === playerGuess){
        result = `You Tie! you played ${playerGuess}! The computer played ${computerSelection}`;
    }else if((computerSelection === "p") && (playerGuess === "r")){
        result = `human looses you played rock! The computer played paper`;
        computerScore++;
    }else if((computerSelection === "r") && (playerGuess === "p")){
        result = `Human wins you played paper! The computer played rock`;
        playerScore++;
    }else if((computerSelection === 's') && (playerGuess === 'p')){
        result = `computer wins you played paper! The computer played scissors`;
        computerScore++;
    }else if((computerSelection === 'p') && (playerGuess === 's')){
        result = `Human wins you played scissors! The computer played paper`;
        playerGuess++;
    }else if((playerGuess === 'r') && (computerSelection === 's')){
        result = `Human wins you played rock! The computer played scissors`;
        playerScore++;
    }else if((playerGuess === 's') && (computerSelection === 'r')){
        result = `Human Looses you played scissors! The computer played rock`;
        computerScore++;
    }else{
        result = `you need a weapon of choice either: paper, rock, scissors`;
    }
    return(result);
}

// function gameWinner(gameScore){
//     if (playerScore <= 5){
//         announcement = 'Humans won';
//     }else if (computerScore => 5){
//         announcement = 'You lost';
//     }else{
//         announcement = 'error'
//     }
//     return(announcement);
// }


for (let i = 1; playerScore <= 5; i++) {
    let playerGuess = prompt(('what is your weapon of choice: Rock, Paper, Scissors?')).slice(0,1).toLowerCase();
    let computerSelection = weapons[Math.floor(Math.random()*weapons.length)];
    console.log(checkWinner(playerGuess, computerSelection));
};





// function checkWinner(Guess){
//     if(computerSelection === playerGuess){
//         win = "you tie";
//     } else if(computerSelection < playerGuess){
//         win = " you lose";
//     } else{
//         win = " you tie";
//     }
//     return (win);
// }
// console.log(checkWinner(playerGuess));
// console.log(computerGuess);

// for (let i = 0; i < 5; i++) {


// };



// console.log(playerGuess(prompt('what is your weapon of choice: Rock, Paper, Scissors?')));
// console.log(checkWinner(playerGuess));




//If a player chooses Rock(0) Paper(1) Scissors(2) we will assign them numbers

//afte we assign them numbers we use math random to generate computer values and compare.

