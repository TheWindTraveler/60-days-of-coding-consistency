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