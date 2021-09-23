function getOutput(value) {
  return (document.getElementById("output-value").innerText = value);
}
/*
function printOutput(num) {
  if (num == "") {
    document.getElementById("output-value").innerText = num;
  } else {
    document.getElementById("output-value").innerText = getFormattedNumber(num);
  }
}

function getFormattedNumber(num) {
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}

function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}
*/
let initialValue = "";
let oper = "";
let storedValue = "";

let operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    oper = operator[i].innerText;
    getOutput(oper);
    storedValue = initialValue;
    initialValue = "";
  });
}

let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    initialValue = number[i].innerText;
    getOutput(initialValue);
  });
}
let sum = document.querySelector(".equals");
sum.addEventListener("click", function () {
  let answer;
  console.log(initialValue, storedValue);
  switch (oper) {
    case "+":
      answer = parseFloat(storedValue) + parseFloat(initialValue);
      getOutput(answer);
      break;
    case "-":
      answer = parseFloat(storedValue) - parseFloat(initialValue);
      getOutput(answer);
      break;
    case "X":
      answer = parseFloat(storedValue) * parseFloat(initialValue);
      getOutput(answer);
      break;

    case "/":
      answer = parseFloat(storedValue) / parseFloat(initialValue);
      getOutput(answer);
      break;
  }
});

/*
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
