const text = document.querySelector("p");
const btn = document.querySelector("button");
const input = document.querySelectorAll(".input");

const getInputText = () => {
  text.innerHTML = input[0].value + " " + input[1].value;
};

btn.addEventListener("click", getInputText);

// text.addEventListener("click", () => {
//   text.innerHTML = "Hello Total Tools";
//   text.classList.toggle("red");
// });

// const addRedClass = () => {
//     text.classList.toggle("red")
// }
