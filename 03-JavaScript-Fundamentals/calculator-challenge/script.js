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
  return number(num.replace(/,/g, ""));
}
let initialValue = "";
let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    let initialValue = parseFloat(number[i].innerText);
    console.log(initialValue);
    document.querySelector("#output-value").innerText = initialValue;
    /*let output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      output = output + this.id;
      printOutput(output);
    }
    */
    return initialValue;
  });
}
console.log(initialValue);

const operator = document.getElementsByClassName("operator");
console.log(operator);
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function (initialValue) {
    let operatorValue = operator[i].innerText;
    console.log(operatorValue);
    console.log(initialValue);
    let storeNumber = 0;
    initialValue = storeNumber;
    console.log(storeNumber);
    initialValue = "";
  });
}

//const operator = ["+", "-", "*", "/"];
const digit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const firstNumber = parseFloat("");
const secondNumber = parseFloat("");

const sum = document.querySelector(".equals");
sum.addEventListener("click", () => {
  let answer;

  switch (operatorValue) {
    case "+":
      answer = initialValue + secondNumber;
      document.querySelector("#output-value").innerText = answer;
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
