import { drawAlert } from "./UI.js";
import { attemptCounter, buttonCheck, buttonNewGame, buttonTest, inputNumber, inputSetN, modalCover, modal } from "./constants.js";
import { winnerModal } from "./modal.js";

// random number 0 - 100
let number = Math.floor(Math.random() * 100) + 1;
console.log(number);
// max number
let roofNum = 100;
// attempt counter
let count = 0;

attemptCounter.textContent = "0";

// check max value in the input
inputNumber.addEventListener("input", (e) => {
    if (e.target.value > roofNum) {
        drawAlert(`max num is ${roofNum}`);
        e.target.value = roofNum;
    }
})

buttonCheck.onclick = () => {
    attemptCounter.textContent = count + 1
    if (inputNumber.value == number) {
        return winnerModal(count + 1);
    } else {
        getHelp();
    }
}

function getHelp() {
    counter();
    if (inputNumber.value > number) {
        drawAlert("Загаданное число ниже введённого");
    } else {
        drawAlert("Загаданное число выше введённого");
    }
}

function counter() {
    count++;
    if (count % 3 == 0) {
        console.log("this");
        if (number % 2 == 0) {
            console.log("число чётное");
            drawAlert("число чётное");
        } else {
            console.log("число не чётное");
            drawAlert("число нечётное");
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

export function newGame() {
    number = Math.floor(Math.random() * 100) + 1;
    roofNum = 100;
    count = 0;
    attemptCounter.textContent = count;
    inputSetN.value = "";
    modalCover.style.display = "none";
    modal.style.display = "none";
}

buttonNewGame.onclick = () => {
    newGame();
}


