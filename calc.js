function add(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    return first / second;
}

function operate(operator, first, second) {
    let result = "";
    switch(operator) {
        case "+":
            result = add(first, second).toString();
            return result;
            break;
        case "-":
            result = subtract(first, second).toString();
            return result;
            break;
        case "*":
            result = multiply(first, second).toString();
            return result;
            break;
        case "/":
            result = divide(first, second).toString();
            return result;
            break;
    }
}

function displayOnScreen(value) {
    const screen = document.querySelector(".screen");
    screen.textContent = value;
}

let input = "";
let firstNum = 0;
let secondNum = 0;
let opr = "";

const numBtns = Array.from(document.querySelectorAll(".num"));
numBtns.forEach(numBtn => {
    numBtn.addEventListener("click", function(e) {
        input += numBtn.textContent;
        if(input.length > 10) {
            input = input.substring(0, 10);
         }
        displayOnScreen(input);
     })
 })
 
const oprBtns = Array.from(document.querySelectorAll(".opr"));
oprBtns.forEach(oprBtn => {
    oprBtn.addEventListener("click", function(e) {
        opr = oprBtn.textContent;
        firstNum = parseInt(input)
        input = "";
    })
})

const clearbtn = document.querySelector(".clear");
clearbtn.addEventListener("click", function(e) {
    input = "";
    firstNum = 0;
    secondNum = 0;
    opr = "";
    displayOnScreen(0);
})

const eqlBtn = document.querySelector(".eql");
eqlBtn.addEventListener("click", function(e) {
    secondNum = parseInt(input);
    input = "";
    displayOnScreen(operate(opr, firstNum, secondNum));
})





