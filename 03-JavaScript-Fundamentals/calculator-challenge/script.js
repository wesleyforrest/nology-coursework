function getOutput() {
  return document.getElementById("output-value").innerText;
}
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

let operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    alert("the operator clicked:" + this.id);
  });
}

let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
  operator[i].addEventListener("click", function () {
    alert("the number clicked:" + this.id);
  });
}

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
