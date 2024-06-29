let displayValue = '';

function appendNumber(number) {
    displayValue += number;
    document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
    displayValue += operator;
    document.getElementById('display').value = displayValue;
}

function calculate() {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = result;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

