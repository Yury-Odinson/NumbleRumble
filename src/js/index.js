import { attemptCounter, buttonCheck, buttonNewGame, inputNumber, inputSetN } from "./constants.js";

// random number
let number = Math.floor(Math.random() * 100) + 1;
console.log(number);
// max number
let roofNum = 100;
// attempt counter
let count = 0;

inputNumber.onchange = (e) => {
    if (e.target.value > roofNum) {
        console.log(`max num is ${roofNum}`);
        inputNumber.value = roofNum;
    }
}

buttonCheck.onclick = () => {
    attemptCounter.textContent = count + 1
    if (inputNumber.value == number) {
        return console.log("YEP!");
    } else {
        getHelp();
    }
}

function getHelp() {
    counter();
    if (inputNumber.value > number) {
        console.log("higer");
    } else {
        console.log("lower");
    }
}

function counter() {
    count++;
    if (count % 3 == 0) {
        console.log("this");
        if (number % 2 == 0) {
            console.log("число чётное");
        } else {
            console.log("число не чётное");
        }
    }
}

function setHiddenNumber(n) {
    return number = Math.floor(Math.random() * n) + 1, roofNum = n;
}

// set custom range number
inputSetN.onchange = (e) => {
    setHiddenNumber(e.target.value);
}

function newGame() {
    number = Math.floor(Math.random() * 100) + 1;
    roofNum = 100;
    count = 0;
    attemptCounter.textContent = count;
    console.log(number);
}

buttonNewGame.onclick = () => {
    newGame();
}
