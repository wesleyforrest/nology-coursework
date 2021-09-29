// We're gonna make the apple iphone calculator.. Namely there's a leftNumber, an operator, and a rightNumber.
// ie. You can't do 2+2+2 .. because there's multiple opeartors and more than a left & right number
let number = document.getElementsByClassName("number");
const calcOutput = document.querySelector("#output-value");
const sum = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const del = document.querySelector(".del");
const decimal = document.querySelector(".decimal");

let leftNumber = "";
let rightNumber = "";
let storedNumber = "";
let decimalClick = false;

// 1. Numbers Click Event Handler - On the first click event, populate the leftNumber.
//    .. Append any extra clicks to the leftNumber UNTIL YOU CLICK AN OPERATOR
//    .. THEN! you can now populate the right number because the operator has been clicked

// 2. Operators Click Event handler - In a seperate event handler for the "operators", populate the operator
//    Note: If leftNumber and rightNumber are set, then we don't want to set the operator, we want to EVALUATE it (apple iphone logic you see)

// 3. Equals Click Event handler - evaluate the left and right number with whatever operator was clicked. Then display this to the user

// Challenge #1 - Create a calculator "VISUALLY". In each of the three event handlers above, capture what was clicked, and log it the console
function displayOutput(value) {
  calcOutput.innerText = value;
}

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", () => {
    if (leftNumber) {
      leftNumber = leftNumber + number[i].innerText;
    } else {
      leftNumber = number[i].innerText;
    }
    displayOutput(leftNumber);
  });
}

let operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", () => {
    oper = operator[i].innerText;
    displayOutput(oper);
    rightNumber = leftNumber;
    displayOutput(rightNumber);
    leftNumber = "";
    console.log(rightNumber, leftNumber);
  });
}

sum.addEventListener("click", () => {
  let answer;
  switch (oper) {
    case "+":
      answer = parseFloat(rightNumber) + parseFloat(leftNumber);
      displayOutput(answer);
      break;
    case "-":
      answer = parseFloat(rightNumber) - parseFloat(leftNumber);
      displayOutput(answer);
      break;
    case "/":
      answer = parseFloat(rightNumber) / parseFloat(leftNumber);
      displayOutput(answer);
      break;
    case "X":
      answer = parseFloat(rightNumber) * parseFloat(leftNumber);
      displayOutput(answer);
      break;
  }
});

clear.addEventListener("click", () => {
  displayOutput("");
  leftNumber = "";
  rightNumber = "";
  oper = "";
});

del.addEventListener("click", () => {
  if (leftNumber > "") {
    leftNumber = leftNumber.slice(0, -1);
  } else if (rightNumber > "") {
    rightNumber = rightNumber.slice(0, -1);
  } else {
    displayOutput;
  }
});

decimal.addEventListener("click", () => {
  decimalClick = true;
  if (decimalClick) {
    leftNumber = leftNumber + ".";
    displayOutput(leftNumber);
  } else {
    leftNumber;
  }
});
