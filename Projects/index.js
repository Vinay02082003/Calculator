function add(x, y) {
    return parseFloat(x) + parseFloat(y);
  }
  
  function subtract(x, y) {
    return parseFloat(x) - parseFloat(y);
  }
  
  function divide(x, y) {
    return parseFloat(x) / parseFloat(y);
  }
  
  function multiply(x, y) {
    return parseFloat(x) * parseFloat(y);
  }
  
  function operate(x, y, operator) {
    if (operator === "add") {
      return add(x, y);
    } else if (operator === "subtract") {
      return subtract(x, y);
    } else if (operator === "divide") {
      return divide(x, y).toFixed(5);
    } else if (operator === "multiply") {
      return multiply(x, y);
    } else {
      return null;
    }
  }
  
  const numbers = document.querySelectorAll(".number");
  const operators = document.querySelectorAll(".operator");
  const display = document.querySelector(".display");
  const calculate = document.getElementById("calculate");
  const clear = document.querySelector(".clear");
  const backSpace = document.querySelector(".delete");
  const decimal = document.querySelector(".decimal");
  const sign = document.querySelector(".sign");
  const digits = display.innerText.length;
  
  let currentOperator = null;
  let firstNum = null;
  let secondNum = null;
  let resetScreen = false;
  let result = null;
  // let count = 0;
  
  
  numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
      if (resetScreen) {
        clearScreen();
      }
      displayNumber(e.target.innerText);
      resetScreen = false;
    });
  });
  
  operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
      setOperand(showNumber());
      setTheOperator(e.target.id);
      resetScreen = true;
    });
  });
  
  calculate.addEventListener("click", () => {
    result = calculateResult();
    clearScreen();
    if (result) {
      displayNumber(result);
    }
  });
  
  clear.addEventListener("click", () => {
    clearAllValues();
  });
  
  backSpace.addEventListener("click", deleteNumber);
  decimal.addEventListener("click", displayDecimal);
  sign.addEventListener("click", displaySign);
  
  function displayNumber(number) {
    display.innerText += number;
  }
  
  function showNumber() {
    return display.innerText;
  }
  
  function setTheOperator(operator) {
    if (currentOperator == null) {
      currentOperator = operator;
    } else if (firstNum && secondNum) {
      result = operate(Number(firstNum), Number(secondNum), currentOperator);
      clearScreen();
      displayNumber(result);
      firstNum = result;
      secondNum = null;
      currentOperator = operator;
    }
  }
  
  function setOperand(value) {
    if (firstNum == null) {
      firstNum = value;
    } else {
      secondNum = value;
    }
  }
  
  function clearScreen() {
    display.innerText = "";
  }
  
  function clearAllValues() {
    firstNum = null;
    secondNum = null;
    currentOperator = null;
    clearScreen();
  }
  
  function calculateResult() {
    if (firstNum && currentOperator && !resetScreen && !secondNum) {
      setOperand(showNumber());
      return operate(Number(firstNum), Number(secondNum), currentOperator);
    } else {
      return false;
    }
  }
  
  function deleteNumber() {
    if (display.innerText !== "0") {
      display.innerText = display.innerText.toString().slice(0, -1);
    }
    if (display.innerText === "") {
      display.innerText = "";
    }
  }
  
  function displayDecimal() {
    if (!display.innerText.includes(".")) {
      display.innerText += ".";
    }
  }
  
  function displaySign() {
    display.innerText = -display.innerText;
  }
  
  window.addEventListener("keydown", setKey);
  
  function setKey(e) {
    if (e.key >= 0 && e.key <= 9) displayNumber(e.key);
    if (e.key === ".") displayDecimal(e.key);
    if (e.key === "Backspace") deleteNumber(e.key);
    if (e.key === "Delete") clearScreen(e.key);
  }
  
