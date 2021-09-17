//Named function
//Decaring function
function greeting(name, favMusic) {
  console.log("Hello " + name + ", your favourite music is " + favMusic);
}
//Invoking function

const mySecondFunction = function () {
  console.log("Hello Nology");
};

mySecondFunction();
greeting("Wes", "Abba");

//Arrow Fi=unctions
const fullName = (firstName, lastName) => {
  console.log(`Hello ${firstName}, your surname is ${lastName}`);
};

fullName("Wes", "Forrest");
fullName("Wes", "Forrest");

const calcDays = (years) => {
  return years * 365;
};

const age = "25";

console.log(age);

const getDescription = (sex, place, sprogs, job) => {
  return `I am a ${sex} living in ${place} with ${sprogs} child and I am a ${job}`;
};

console.log(getDescription("male", "sussex", "1", "software developer"));

const tempCalc = (celcius) => {
  return (celcius * 9) / 5 + 32;
};

console.log(tempCalc(10));
