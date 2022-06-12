const data = {
  currentNumber: "0",
  calculatorOperator: "",
  prevNumber: "",
};

let { currentNumber, calculatorOperator, prevNumber } = data;

function updateDisplay() {
  document.querySelector(".display__number").innerText = currentNumber;
}

function inputDigit(digit) {
  if (currentNumber === "0") {
    currentNumber = digit;
  } else {
    currentNumber += digit;
  }
}

function clearCalculator() {
  prevNumber = "";
  calculatorOperator = "";
  currentNumber = "0";
}

function inverseNumber() {
  if (currentNumber === "0") return;

  currentNumber = currentNumber * -1;
}

function inputOperator(operator) {
  if (calculatorOperator === "") {
    prevNumber = currentNumber;
  }
  calculatorOperator = operator;
  currentNumber = "";
}

function inputDecimal(dot) {
  if (currentNumber.includes(".")) return;

  currentNumber += dot;
}

function calculate() {
  let result = "";
  let divide = null;

  switch (calculatorOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "×":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "÷":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;

    default:
      break;
  }

  result = divide.toFixed(2);
  currentNumber = result;
}

const buttons = document.querySelectorAll(".calculator__key");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("key--allclear")) {
      clearCalculator();
      updateDisplay();
      return;
    }

    if (target.classList.contains("key--plusmins")) {
      inverseNumber();
      updateDisplay();
      return;
    }

    if (target.classList.contains("key--equalsign")) {
      calculate();
      updateDisplay(currentNumber);
      return;
    }

    if (target.classList.contains("key--operator")) {
      inputOperator(target.innerText);
      return;
    }

    if (target.classList.contains("key--decimal")) {
      inputDecimal(target.innerText);
      updateDisplay(currentNumber);
      return;
    }

    inputDigit(target.innerText);
    updateDisplay();
  });
});
