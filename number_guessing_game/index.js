const readlineSync = require("readline-sync");

/*let number = readlineSync.questionInt("Chose a max value number: ");
console.log('Hi', name, 'you have chosen the number', number);
let sum = 5 + number;
console.log(number + ' plus ' + 5 + ' is ' + sum);*/

let maxNumResult = 0;
let ranNum = 0;

// gets the maximum number for the game from the user and returns it as a Number
let getMaxFromUser = () => {
       let maxNumber = readlineSync.questionInt("Chose a max value number: ");
//let maxNumber=parseInt(max)
if(maxNumber<=0){console.log("0 is not a valid number");process.exit()}
       else{console.log('Ok, you have chosen the number', maxNumber, "- let's play! ")};
    return maxNumber;
}
// takes care of prompting the user for a guess and converting it to a number
let getGuessFromUser = (max) => {
    let guess = readlineSync.questionInt("Pick a number between 0 and " + maxNumResult + "-");
    return guess;
}
// check if a guess is correct and return a boolean
let isGuessCorrect = (goal, guess) => {
    if (guess === goal) {
        console.log("That is correct! ");
    } else if (guess > goal) {
        console.log("Too High!");
    } else if (guess < goal) {
        console.log("Too low!");
    }
}
// generates a random integer between 0 and max
let generateRandomNumber = (max) => {
    let random = Math.floor(Math.random() * max);
    return random;
}
//Function that starts the game and contains and calls several other functions and while loop
let startGame = () => {
    const name = readlineSync.question("What is your name? ");
    console.log("Hello " + name + "!");

    maxNumResult = getMaxFromUser();
    ranNum = generateRandomNumber(maxNumResult);

    //Loops getting a guess from user and evaluates the answer until answer is correct.
    while (userGuess !== ranNum) {
        var userGuess = getGuessFromUser();
        if (userGuess === 0) { break; }
        isGuessCorrect(ranNum, userGuess);
    }
}

// here use a while loop to continually run the game
let runGame = true;
//startGame is called in a while loop with an option after the program has run to play again
while (runGame) {
    startGame();
    if (!readlineSync.keyInYN('Do you want to play again?')) {
        runGame = false;
    }
}

