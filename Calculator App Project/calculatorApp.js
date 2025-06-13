const numberButtonElement = document.querySelectorAll(".btn-number");
const operatorButtonElement = document.querySelectorAll(".btn-operator");
const equalsButtonElement = document.querySelector(".btn-equal");


let input = "";
let firstNumber = "";
let operator = "";
let secondNumber = "";

// (LOOP Function): For all button that is being clicked log their content to the console
numberButtonElement.forEach(button => {
    button.addEventListener('click', () => {
        input += button.textContent;
        
        if(operator){
            secondNumber += button.textContent;
            document.querySelector(".calculation").textContent = firstNumber + " " + operator + " " + secondNumber;
        } else {
            document.querySelector(".calculation").textContent = input;
        }
    })
})


operatorButtonElement.forEach(button => {
    button.addEventListener('click', () => {
        if (!firstNumber){
            firstNumber = input;
            operator = button.textContent;
            input = "";
        }
        document.querySelector(".calculation").textContent = firstNumber + " " + operator;
    })
})

equalsButtonElement.addEventListener('click', function() {
    if (firstNumber && operator && secondNumber) {
            let expression = firstNumber + operator + secondNumber;
            let result = eval(expression);
            document.querySelector(".result").textContent = result;
    }

});