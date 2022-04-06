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
    switch(operator) {
        case "+":
            add(first, second);
            break;
        case "-":
            subtract(first, second);
            break;
        case "*":
            multiply(first, second);
            break;
        case "/":
            divide(first, second);
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






