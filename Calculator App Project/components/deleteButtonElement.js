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