const btn = document.querySelector(".btn");

const morseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

const MorseToText = {
  ".-": "A",
};

class Translator {
  constructor(input) {
    this.input = input;
  }
  convertInput(inputValue) {
    console.log(this.input);
    // console.log(
    //   inputValue.split("").map((letter) => {
    //     // this.input[letter];
    //     console.log(this.input[letter]);
    //   })
    // );
    //
    return inputValue
      .toUpperCase()
      .split("")
      .map((letter) => {
        this.input[letter];
      })
      .join("");

    //return console.log(inputValue);
  }
}

const output = document.querySelector(".output");

const englishTranslate = new Translator(morseCode);

btn.addEventListener("click", () => {
  output.innerText = englishTranslate.convertInput(inputValue.value);
});

const inputValue = document.querySelector(".input-value");
