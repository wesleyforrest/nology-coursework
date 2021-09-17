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

const operator = document.getElementsByClassName("operator");
console.log(operator);
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function (event) {
    let operatoerValue = operator[i].innerText;
    console.log(operatoerValue);
  });
}

let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    let initialValue = parseFloat(number[i].innerText);
    document.querySelector("#output-value").innerText = initialValue;
    /*let output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      output = output + this.id;
      printOutput(output);
    }
    */
  });
}
