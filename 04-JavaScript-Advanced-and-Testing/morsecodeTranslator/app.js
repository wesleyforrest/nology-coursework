const btn = document.querySelector(".btn");
const inputValue = document.querySelector(".input-value");
const outputValue = document.querySelector(".output-value");

const btnNew = document.querySelector(".btn-to-english");
const newInputValue = document.querySelector(".new-input-value");
const newOutputValue = document.querySelector(".new-output-value");

const englishToMorseCode = {
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

const morseCodeToEnglish = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
};

class Translator {
  constructor(englishAlphabet, morseAlphabet) {
    this.englishAlphabet = englishAlphabet;
    this.morseAlphabet = morseAlphabet;
  }

  convertToMorse(english) {
    const convertedValue = english.toUpperCase().split("");
    const mappedLetters = convertedValue
      .map((letter) => {
        return this.englishAlphabet[letter];
      })
      .join(" ");
    return mappedLetters;
  }

  convertToEnglish(morse) {
    const convertedValueMorse = morse.toUpperCase().split("");
    const mappedCode = convertedValueMorse
      .map((code) => {
        return this.morseAlphabet[code];
      })
      .join(" ");
    console.log(mappedCode);
    return mappedCode;
  }
}

const translateToMorse = new Translator(englishToMorseCode, morseCodeToEnglish);
const translateToEnglish = new Translator(
  englishToMorseCode,
  morseCodeToEnglish
);

btn.addEventListener("click", () => {
  outputValue.innerText = translateToMorse.convertToMorse(inputValue.value);
});

btnNew.addEventListener("click", () => {
  newOutputValue.innerText = translateToEnglish.convertToEnglish(
    newInputValue.value
  );
});
