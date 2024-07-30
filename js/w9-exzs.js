function showOutput() {
    let number1 = document.querySelector("#num1").value;
    let number2 = document.querySelector("#num2").value;

    let calculatedOutput = number1 * number2;

    document.querySelector("#output").textContent = "The multiplication of " + number1 + " and " + number2 + " is " + calculatedOutput;
}

document.querySelector("#btn").addEventListener("click", showOutput);
document.querySelector("#btn").style.display = "block";