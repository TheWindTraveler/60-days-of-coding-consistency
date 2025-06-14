const numberButtonElement = document.querySelectorAll(".btn-number");
const operatorButtonElement = document.querySelectorAll(".btn-operator");
const equalsButtonElement = document.querySelector(".btn-equal");
const deleteButtonElement = document.querySelector(".delete-button");


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
        if (!operator){
            if (!firstNumber){
                firstNumber = input;
            }
            operator = button.textContent;
            input = "";
            document.querySelector(".calculation").textContent = `${firstNumber} ${operator}`;
        } else if (firstNumber && secondNumber) {
            let result = eval(`${firstNumber}${operator}${secondNumber}`);
            firstNumber = result.toString();
            secondNumber = "";
            operator = button.textContent;
            input = "";

            document.querySelector(".result").textContent = result;
            document.querySelector(".calculation").textContent = `${firstNumber} ${operator}`;
        }
    })
})

equalsButtonElement.addEventListener('click', function() {
    if (firstNumber && operator && secondNumber) {
            let result = eval(`${firstNumber}${operator}${secondNumber}`);
            document.querySelector(".result").textContent = result;

            input = result.toString();
            firstNumber = result.toString()
            secondNumber = "";
            operator = "";

            document.querySelector(".calculation").textContent = result;
    }

});

deleteButtonElement.addEventListener('click', () =>{
    if (operator && secondNumber) {
        secondNumber = secondNumber.slice(0, -1);
        input = secondNumber;
        document.querySelector(".calculation").textContent = `${firstNumber} ${operator} ${secondNumber}`;
    } else if (!operator && firstNumber){
        firstNumber = firstNumber.slice(0, -1);
        input = firstNumber;
        document.querySelector(".calculation").textContent = firstNumber;
    } else {
        input = input.slice(0, -1);
        document.querySelector(".calculation").textContent = input;
    }
})