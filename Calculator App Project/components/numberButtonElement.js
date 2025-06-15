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
        updateEqualButtonState();
    })

})