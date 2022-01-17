//Attach event listener to button

// document.querySelector(".translate-btn").addEventListener("click", () => {
//   const englishWord = document.querySelector(".input-box").value;

//   // If word matches, put translation in the DOM
//   if (englishWord === "hello") {
//     document.querySelector(".translate-result").innerHTML = "bonjour";
//   } else if (englishWord === "goodbye") {
//     document.querySelector(".translate-result").innerHTML = "Au Revoir";
//   } else {
//     document.querySelector(".translate-result").innerHTML = "unavaliable";
//   }
// });

//Make the code more testable
//Decouple logic
// 1. Fucntion that translates english to french
// 2. Some DOM interation in an event listener

//Accept inputs => return outputs
const translateEnglishToFrench = (englishWord) => {
  if (englishWord === "hello") {
    return "bonjour";
  } else if (englishWord === "goodbye") {
    return "Au Revoir";
  } else {
    return "unavailable";
  }
};

document.querySelector(".translate-btn").addEventListener("click", () => {
  const englishWord = document.querySelector(".input-box").value;
  const frenchWord = translateEnglishToFrench(englishWord);

  document.querySelector(".translate-result").innerHTML = frenchWord;
});
