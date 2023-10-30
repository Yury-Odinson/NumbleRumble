import { buttonCheck, inputNumber } from "./constants.js";

// random number
const number = Math.floor(Math.random() * 100) + 1;

let count = 0;

console.log(number);

buttonCheck.onclick = () => {
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
    console.log(count);
    if (count % 3 == 0) {
        console.log("this");
        if (number % 2 == 0) {
            console.log("число чётное");
        } else {
            console.log("число не чётное");
        }
    }
}
