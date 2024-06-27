let displayValue = '';
let operator = '';
let operand1 = '';
let operand2 = '';

function clickButton(value) {
  if (value === '=') {
    calculate();
  } else if (value === 'C') {
    clearDisplay();
  } else if (['+', '-', '*', '/'].includes(value)) {
    operator = value;
    operand1 = displayValue;
    displayValue = '';
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function calculate() {
  operand2 = displayValue;
  let result = 0;
  switch (operator) {
    case '+':
      result = parseFloat(operand1) + parseFloat(operand2);
      break;
    case '-':
      result = parseFloat(operand1) - parseFloat(operand2);
      break;
    case '*':
      result = parseFloat(operand1) * parseFloat(operand2);
      break;
    case '/':
      result = parseFloat(operand1) / parseFloat(operand2);
      break;
  }
  displayValue = result.toString();
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  operator = '';
  operand1 = '';
  operand2 = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}