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


let input = ""
const btns = Array.from(document.querySelectorAll(".btn"));
btns.forEach(btn => {
    btn.addEventListener("click", function(e) {
        //if the button is a number, put its content in input and display it
        if(btn.classList.contains("num")){
            input += btn.textContent;
            displayOnScreen(input)
        }
        //if the button is an operator, save that as a seperate input
    })
})


