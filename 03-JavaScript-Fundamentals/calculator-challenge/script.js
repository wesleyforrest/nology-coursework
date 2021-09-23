const number = document.queryCommandValue(".number");
const operator = document.querySelectorAll(".operator");

let initialValue = "";
let oper = "";
let storedNumber = 0;

function displayOutput(value) {
  return (document.querySelector("#output-value").innerText = value);
}

/*
function getFormattedNumber(num) {
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}
function reverseNumberFormat(num) {
  return number(num.replace(/,/g, ""));
}
*/

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", (event) => {
    initialValue = event.target.innerText;
    displayOutput.innerText = initialValue;
  });
}

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function (event) {
    storedNumber = initialValue;
    operatorValue = event.target.innerText;
    displayOutput.innerText = "";
  });
}

sum.addEventListener("click", () => {
  let answer;

  switch (operatorValue) {
    case "+":
      answer = parseFloat(storedNumber) + parseFloat(initialValue);
      displayOutput.innerText = answer;
      break;
    case "-":
      answer = initialValue - secondNumber;
      document.querySelector("#output-value").innerText.answer;
      break;
    case "*":
      answer = initialValue * secondNumber;
      document.querySelector("#output-value").innerText.answer;
      break;

    case "/":
      answer = initialValue / secondNumber;
      document.querySelector("#output-value").innerText.answer;
      break;
  }
});

/*
if (operator == "+") {
  answer = firstNumber + secondNumber;
} else if (operator == "-") {
  answer = firstNumber - secondNumber;
} else if (operator == "*") {
  answer = firstNumber * secondNumber;
} else {
  answer = firstNumber / secondNumber;
}
*/
