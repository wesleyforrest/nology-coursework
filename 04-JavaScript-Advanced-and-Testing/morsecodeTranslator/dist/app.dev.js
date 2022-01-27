"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var btn = document.querySelector(".btn");
var morseCode = {
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
var MorseToText = {
  ".-": "A"
};

var Translator =
/*#__PURE__*/
function () {
  function Translator(input) {
    _classCallCheck(this, Translator);

    this.input = input;
  }

  _createClass(Translator, [{
    key: "convertInput",
    value: function convertInput(inputValue) {
      var _this = this;

      console.log(this.input); // console.log(
      //   inputValue.split("").map((letter) => {
      //     // this.input[letter];
      //     console.log(this.input[letter]);
      //   })
      // );
      //

      return inputValue.toUpperCase().split("").map(function (letter) {
        _this.input[letter];
      }).join(""); //return console.log(inputValue);
    }
  }]);

  return Translator;
}();

var output = document.querySelector(".output");
var englishTranslate = new Translator(morseCode);
btn.addEventListener("click", function () {
  output.innerText = englishTranslate.convertInput(inputValue.value);
});
var inputValue = document.querySelector(".input-value");