const numberButtonElement = document.querySelectorAll(".btn-number");
const operatorButtonElement = document.querySelectorAll(".btn-operator");
const equalsButtonElement = document.querySelector(".btn-equal");
const deleteButtonElement = document.querySelector(".delete-button");
const clearAllButtonElement = document.querySelector(".btn-clear-all");


let input = "";
let firstNumber = "";
let operator = "";
let secondNumber = "";


function updateEqualButtonState() {
    if (firstNumber && operator && secondNumber ){
        equalsButtonElement.disabled = false;
    } else {
        equalsButtonElement.disabled = true;
    }
}