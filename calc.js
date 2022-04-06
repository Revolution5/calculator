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
    if(second == 0) {
        return "Nope";
    }
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
        case "x":
            result = multiply(first, second).toString();
            return result;
            break;
        case "÷":
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
        //limit length of input to prevent overflowing the screen
        if(input.length > 10) {
            input = input.substring(0, 10);
         }
        displayOnScreen(input);
     })
 })
 
const oprBtns = Array.from(document.querySelectorAll(".opr"));
oprBtns.forEach(oprBtn => {
    oprBtn.addEventListener("click", function(e) {
        //if there is a firstNum, opr, and input, make input the secondNum and 
        //operate on opr, firstNum, secondNum, then display and store result in firstNum, put new operator in opr
        //clear secondNum and input, have new input be secondNum and repeat process
        if(opr.length > 0 && firstNum > 0) {
            secondNum = Number(input);
            let result = operate(opr, firstNum, secondNum);
            displayOnScreen(result);
            firstNum = Number(result);
            opr = oprBtn.textContent;
            secondNum = 0;
            input = "";
        }
        else {
            opr = oprBtn.textContent;
            firstNum = Number(input)
            input = "";
        }
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
    secondNum = Number(input);
    let result = operate(opr, firstNum, secondNum);
    displayOnScreen(result);
    firstNum = Number(result);
    secondNum = 0;
    input = "";
})

const decBtn = document.querySelector(".dec");
decBtn.addEventListener("click", function(e) {
    //only 1 decimal allowed in a number
    if (input.indexOf(".") == -1) {
        input += ".";
        displayOnScreen(input);
    }
})