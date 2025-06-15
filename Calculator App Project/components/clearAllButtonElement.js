clearAllButtonElement.addEventListener('click', () => {
    input = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";

    document.querySelector(".calculation").textContent = "";
    document.querySelector(".result").textContent = "";

    equalsButtonElement.disabled = true;

})