const text = document.querySelector("p");
const btn = document.querySelector("button");
const input = document.querySelectorAll(".input");

const getInputText = () => {
  text.innerHTML = input[0].value + " " + input[1].value;
};

const changeColour = () => {
  text.classList.toggle(".red");
};

btn.addEventListener("click", getInputText, changeColour);

// text.addEventListener("click", () => {
//   text.innerHTML = "Hello Total Tools";
//   text.classList.toggle("red");
// });

// const addRedClass = () => {
//     text.classList.toggle("red")
// }
