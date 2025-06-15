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
        updateEqualButtonState();
    })
})