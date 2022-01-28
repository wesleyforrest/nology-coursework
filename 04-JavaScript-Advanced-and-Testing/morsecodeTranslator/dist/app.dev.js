"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var btn = document.querySelector(".btn");
var inputValue = document.querySelector(".input-value");
var outputValue = document.querySelector(".output-value");
var btnNew = document.querySelector(".btn-to-english");
var newInputValue = document.querySelector(".new-input-value");
var newOutputValue = document.querySelector(".new-output-value");
var englishToMorseCode = {
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
  Z: "--.."
};
var morseCodeToEnglish = {
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
  "--..": "Z"
};

var Translator =
/*#__PURE__*/
function () {
  function Translator(englishAlphabet, morseAlphabet) {
    _classCallCheck(this, Translator);

    this.englishAlphabet = englishAlphabet;
    this.morseAlphabet = morseAlphabet;
  }

  _createClass(Translator, [{
    key: "convertToMorse",
    value: function convertToMorse(english) {
      var _this = this;

      var convertedValue = english.toUpperCase().split("");
      var mappedLetters = convertedValue.map(function (letter) {
        return _this.englishAlphabet[letter];
      }).join(" ");
      return mappedLetters;
    }
  }, {
    key: "convertToEnglish",
    value: function convertToEnglish(morse) {
      var _this2 = this;

      var convertedValueMorse = morse.toUpperCase().split("");
      var mappedCode = convertedValueMorse.map(function (code) {
        return _this2.morseAlphabet[code];
      }).join(" ");
      console.log(mappedCode);
      return mappedCode;
    }
  }]);

  return Translator;
}();

var translateToMorse = new Translator(englishToMorseCode, morseCodeToEnglish);
var translateToEnglish = new Translator(englishToMorseCode, morseCodeToEnglish);
btn.addEventListener("click", function () {
  outputValue.innerText = translateToMorse.convertToMorse(inputValue.value);
});
btnNew.addEventListener("click", function () {
  newOutputValue.innerText = translateToEnglish.convertToEnglish(newInputValue.value);
});